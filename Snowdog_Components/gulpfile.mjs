/* eslint-env node */
import { globbySync } from 'globby'

import autoprefixer from 'autoprefixer'
import eslint from 'gulp-eslint'
import fractalCore from '@frctl/fractal'
import fs from 'fs-extra'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import gulpSass from 'gulp-sass'
import log from 'gulp-logger'
import mandelbrot from '@frctl/mandelbrot'
import nodeSass from 'node-sass'
import notify from 'gulp-notify'
import path from 'path'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import reporter from 'postcss-reporter'
import sassError from 'gulp-sass-error'
import sassLint from 'gulp-sass-lint'
import sourcemaps from 'gulp-sourcemaps'
import stylelint from 'stylelint'
import svgSprite from 'gulp-svg-sprite'
import util from 'gulp-util'

const sass = gulpSass(nodeSass);
const basePath = path.resolve('./');

// Fractal configuration
const fractal = fractalCore.create();
const logger = fractal.cli.console;
const instance = fractal.components.engine();

instance.handlebars.registerHelper('static', (file, data) => {
  return `/components/raw/${data.data.root._self.baseHandle}/${file}`
});

instance.handlebars.registerHelper('svg', icon => {
  return `/images/icons-sprite.svg#${icon}`
});

instance.handlebars.registerHelper('component', name => `@${name}`);

instance.handlebars.registerHelper('or', function() {
  return Array.prototype.slice.call(arguments, 0, -1).some(Boolean)
});

fractal.set('project.title', 'Alpaca components for Magento 2');
fractal.components.set('path', basePath + '/build/components');
fractal.docs.set('path', basePath + '/build/docs');
fractal.web.set('static.path', basePath + '/build/public');
fractal.web.set('builder.dest', basePath + '/dest');
fractal.web.theme(mandelbrot({ skin: 'black' }));

// Gulp tasks
const inheritance = async () => {

  const componentsPath = fractal.components.get('path').replace(basePath + '/build/', '');
  const docsPath = fractal.docs.get('path').replace(basePath + '/build/', '');
  const staticPath = fractal.web.get('static.path').replace(basePath + '/build/', '');

  // Remove old build directory
  fs.removeSync('./build');

  // Find all local files
  globbySync([
    componentsPath + '/**',
    docsPath + '/**',
    staticPath + '/**'
  ], { nodir: true })
    .forEach(file => {
      // Symlink all local files to build dir
      if (util.env.ci) {
        fs.copySync(
          file,
          'build/' + file
        );
      }
      else {
        fs.ensureSymlinkSync(
          file,
          'build/' + file
        );
      }
    });

  if (fs.existsSync('./modules.mjs')) {
    const modules = await import('./modules.mjs')

    // Go through array of module paths
    modules.default.forEach(src => {
      src = path.resolve(src);

      // Find all module files
      globbySync([
        src + '/' + componentsPath + '/**',
        src + '/' + docsPath + '/**',
        src + '/' + staticPath + '/**'
      ], { nodir: true })
        .forEach(file => {
          const srcPath = path.resolve(file);
          const destPath = srcPath.replace(src, path.resolve('build'));

          // Symlink all module files to build dir
          if (util.env.ci) {
            fs.copySync(srcPath, destPath, { overwrite: false });
          }
          else {
            if (!fs.existsSync(destPath)) {
              fs.ensureSymlinkSync(srcPath, destPath)
            }
          }
        });
    });
  }
  await Promise.resolve();
}

const compileStyle = () => {
  return gulp.src(fractal.docs.get('path') + '/styles/**/*.scss')
    .pipe(
      gulpif(
        util.env.ci,
        log({
          display: 'name',
          beforeEach: 'Processing: '
        })
      )
    )
    .pipe(
      gulpif(!util.env.ci,
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
        })
      )
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sassError.gulpSassError(util.env.ci || false)))
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('cssmaps'))
    .pipe(gulp.dest(fractal.web.get('static.path') + '/css'));
}

const lintSASS = () => {
  return gulp.src(fractal.components.get('path') + '/**/*.scss')
    .pipe(
      gulpif(
        util.env.ci,
        log({
          display: 'name',
          beforeEach: 'Processing: '
        })
      )
    )
    .pipe(
      gulpif(!util.env.ci,
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
        })
      )
    )
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(gulpif(util.env.ci, sassLint.failOnError()));
}

const lintCSS = () => {
  return gulp.src(fractal.web.get('static.path') + '/**/*.css')
    .pipe(
      gulpif(
        util.env.ci,
        log({
          display: 'name',
          beforeEach: 'Processing: '
        })
      )
    )
    .pipe(
      gulpif(!util.env.ci,
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
        })
      )
    )
    .pipe(postcss([
      stylelint(),
      reporter({ throwError: util.env.ci || false })
    ]));
}

const lintScript = () => {
  return gulp.src(['./components/**/*.js', '!**/*.config.js'])
    .pipe(
      gulpif(
        util.env.ci,
        log({
          display: 'name',
          beforeEach: 'Processing: '
        })
      )
    )
    .pipe(
      gulpif(!util.env.ci,
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
        })
      )
    )
    .pipe(eslint({ fix: util.env.fix }))
    .pipe(eslint.format())
    .pipe(gulpif(util.env.ci, eslint.failAfterError()));
}

const compileSVG = () => {
  return gulp.src(fractal.components.get('path') + '/Atoms/icons/files/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: 'images',
          sprite: 'icons-sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest(fractal.web.get('static.path')));
}

// Those props are later avalivable via `_target.meta` in `_preview.hbs`
const setAdditionalProps = () => {
  fractal.cli.command('additional-props', function(args, done) {
    const app = this.fractal;

    for (let item of app.components.flatten()) {
      // We need to explicitly set all the meta props for every component, otherwise it won't work properly

      // Enable a11y tooling
      item.meta.a11y = item.viewPath.includes('/Templates/');

      // Set stylesheet for checkout
      item.meta.checkout = item.viewPath.includes('/Templates/checkout/');
    }

    done();
  });

  return fractal.cli.exec('additional-props');
}

const watchStyle = (done) => {
  gulp.watch(
    [
      fractal.components.get('path') + '/**/*.scss',
      fractal.docs.get('path') + '/styles/**/*.scss'
    ],
    { ignored: /.*\.(js|hbs|svg)$/ },
    gulp.series(lintSASS, compileStyle, lintCSS)
  );
  done();
}

const watchScript = (done) => {
  gulp.watch(
    fractal.components.get('path') + '/**/*.js',
    { ignored: /.*\.(scss|hbs|svg)$/ },
    lintScript
  )
  done();
}

const watchSVG = (done) => {
  gulp.watch(fractal.components.get('path') + '/Atoms/icons/files/*.svg', compileSVG)
  done();
}

const watch = gulp.parallel(watchStyle, watchScript, watchSVG)

// Fractal gulp tasks
const startFractal = () => {
  const server = fractal.web.server({
    sync: true,
    port: 4000
  });

  server.on('error', err => logger.error(err.message));

  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
}

const buildFractal = () => {
  const builder = fractal.web.builder();

  if (!util.env.ci) {
    builder.on('progress', (completed, total) => {
      return logger.update(`Exported ${completed} of ${total} items`, 'info');
    });
  }

  builder.on('error', err => logger.error(err.message));

  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
}

export const lint = gulp.series(lintScript, lintSASS)
export const dev = gulp.series(gulp.parallel(inheritance, compileSVG, compileStyle), setAdditionalProps, startFractal, watch)
export const build = gulp.series(gulp.parallel(inheritance, compileSVG, compileStyle), buildFractal)

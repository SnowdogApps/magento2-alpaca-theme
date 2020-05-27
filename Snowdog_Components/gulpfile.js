/* eslint-env node */
/* eslint-disable one-var */

const autoprefixer = require('autoprefixer'),
      bluebird     = require('bluebird'),
      eslint       = require('gulp-eslint'),
      fractal      = require('@frctl/fractal').create(),
      fs           = require('fs-extra'),
      globby       = require('globby'),
      gulp         = require('gulp'),
      gulpif       = require('gulp-if'),
      hbsEngine    = fractal.components.engine(),
      log          = require('gulp-logger'),
      logger       = fractal.cli.console,
      mandelbrot   = require('@frctl/mandelbrot'),
      notify       = require('gulp-notify'),
      path         = require('path'),
      plumber      = require('gulp-plumber'),
      postcss      = require('gulp-postcss'),
      reporter     = require('postcss-reporter'),
      sass         = require('gulp-sass'),
      sassError    = require('gulp-sass-error'),
      sassLint     = require('gulp-sass-lint'),
      sourcemaps   = require('gulp-sourcemaps'),
      stylelint    = require('stylelint'),
      svgSprite    = require('gulp-svg-sprite'),
      util         = require('gulp-util'),
      a11yPreview  = '@views';

// Turn off Bluebird unhandled promises warnings
bluebird.config({
  warnings: false
});

// Fractal configuration
fractal.set('project.title', 'Alpaca components for Magento 2');
fractal.components.set('path', __dirname + '/build/components');
fractal.docs.set('path', __dirname + '/build/docs');
fractal.web.set('static.path', __dirname + '/build/public');
fractal.web.set('builder.dest', __dirname + '/dest');
fractal.web.theme(mandelbrot({ skin: 'black' }));

// Handlebars helpers
hbsEngine.handlebars.registerHelper('static', (file, data) => {
  return '/components/raw/' + data.data.root._self.baseHandle + '/' + file;
});

hbsEngine.handlebars.registerHelper('svg', icon => {
  return '/images/icons-sprite.svg#' + icon;
});

hbsEngine.handlebars.registerHelper('component', name => {
  return '@' + name;
});

// Gulp tasks
const inheritance = (done) => {
  const components = fractal.components.get('path').replace(__dirname + '/build/', ''),
        docs       = fractal.docs.get('path').replace(__dirname + '/build/', ''),
        static     = fractal.web.get('static.path').replace(__dirname + '/build/', '');

  // Remove old build directory
  fs.removeSync('./build');

  // Find all local files
  globby
    .sync([
      components + '/**',
      docs + '/**',
      static + '/**'
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
  if (fs.existsSync('./modules.json')) {
    const modules = require('./modules.json');

    // Go through array of module paths
    modules.forEach(src => {
      src = path.resolve(src);

      // Find all module files
      globby
        .sync([
          src + '/' + components + '/**',
          src + '/' + docs + '/**',
          src + '/' + static + '/**'
        ], { nodir: true })
        .forEach(file => {
          const srcPath  = path.resolve(file),
                destPath = srcPath.replace(src, path.resolve('build'));

          // Symlink all module files to build dir
          if (util.env.ci) {
            fs.copySync(srcPath, destPath, { overwrite: false });
          }
          else {
            fs.ensureSymlinkSync(srcPath, destPath);
          }
        });
    });
  }
  done();
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
  return gulp.src(fractal.components.get('path') + '/**/*.js')
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
    .pipe(eslint())
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

function setA11yViewsPreview(args, done) {
  const app = this.fractal;
  for (let item of app.components.flatten()) {
    if (item.viewPath.includes('Templates')) {
      item.preview = a11yPreview;
    }
  }
  done();
}

const a11y = () => {
  fractal.cli.command('a11y-preview', setA11yViewsPreview, a11yPreview);
  return fractal.cli.exec('a11y-preview');
}

const watchStyle = () => {
  gulp.watch(
    [
      fractal.components.get('path') + '/**/*.scss',
      fractal.docs.get('path') + '/styles/**/*.scss'
    ],
    { ignored: /.*\.(js|hbs|svg)$/ },
    gulp.series(lintSASS, compileStyle, lintCSS)
  );
}

const watchScript = () => {
  gulp.watch(
    fractal.components.get('path') + '/**/*.js',
    { ignored: /.*\.(scss|hbs|svg)$/ },
    lintScript
  )
}

const watchSVG = () => {
  gulp.watch(fractal.components.get('path') + '/Atoms/icons/files/*.svg', compileSVG)
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

const dev = gulp.series(gulp.parallel(inheritance, compileSVG, compileStyle), a11y, startFractal, watch)

const build = gulp.series(gulp.parallel(inheritance, compileSVG, compileStyle), buildFractal)

exports.inheritance = inheritance
exports.compileStyle = compileStyle
exports.lintSASS = lintSASS
exports.lintCSS = lintCSS
exports.lintScript = lintScript
exports.compileSVG = compileSVG
exports.a11y = a11y
exports.watch = watch
exports.dev = dev
exports.build = build
exports.default = build

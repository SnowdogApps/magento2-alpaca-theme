const critical = require('critical');

critical.generate({
  minify: true,
  inline: true,
  base: 'test/',
  src: 'https://stage-colibri.snowdog.dev/',
  target: {
    html: 'index-critical.html',
    css: 'critical.css',
  },
  width: 1300,
  height: 900,
});

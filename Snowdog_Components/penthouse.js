/*
  How this works:
  1. use https://github.com/pocketjoso/penthouse to generate critical.css containing header styles and setting other elements to display none
  2. remove @font-face rules and icons urls from critical.css
  2. enable https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/css-topics/css-critical-path.html
  3. display hidden elements when styles are loaded

*/

const penthouse = require('penthouse');
const fs = require('fs');
const criticalFilePath = '../web/css';

penthouse({
  url: 'https://colibri.test/',
  css: '../../../../pub/static/frontend/Snowdog/alpaca/en_US/css/styles.css',
  width: 1600,
  height: 232
})
  .then(criticalCss => {
    criticalCss += 'body>*:not(.page-wrapper),.page-wrapper>*:not(header,.contact-bar,.marketing-bar,.mega-menu){display: none}';
    fs.mkdir(criticalFilePath, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      fs.writeFileSync(`${criticalFilePath}/critical.css`, criticalCss);
      console.log('critical.css created successfully!');
    })
  })
  .catch(err => {
    console.error(err);
  })

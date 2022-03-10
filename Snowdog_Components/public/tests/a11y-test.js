/* global axe */

const critical = [
  'background: red',
  'color: white'
].join(';');

const moderate = [
  'background: #d04301',
  'color: white'
].join(';');

const element = [
  'background: green',
  'color: white'
].join(';');

const baseStyles = [
  'background: transparent',
  'color: inherit'
].join(';');

const optionsComponents = {
  resultTypes: ['violations', 'incomplete'],
  rules: {
    'bypass': { enabled: false },
    'landmark-one-main': { enabled: false },
    'page-has-heading-one': { enabled: false },
    'region': { enabled: false }
  }
};

const optionsViews = {
  resultTypes: ['violations', 'incomplete']
};

let components = (document.querySelector('body')).classList.contains('components');
let options = (components) ? optionsComponents : optionsViews;

function displayResults(results) {
  const violations = results.violations;
  const incomplete = results.incomplete;

  if (violations.length) {
    console.warn('Check you accessibility errors')
    violations.forEach((item) => {
      let errorColor = (item.impact === ('critical' || 'serious')) ? critical : moderate;
      console.log(
        '%cRule id: %s. Impact %s. %s. %s.\n%cElement: %s.\n%c%s, More information: %s',
        errorColor,
        item.id,
        item.impact,
        item.help,
        item.description,
        element,
        item.nodes[0].html,
        baseStyles,
        item.nodes[0].failureSummary,
        item.helpUrl
      );
    })
  }
  if (incomplete) {
    incomplete.forEach((item) => {
      let errorColor = (item.impact === ('critical' || 'serious')) ? critical : moderate;
      console.log(
        '%cRule id: %s. Impact %s. %s. %s.\n%cElement: %s.\n%c%s, More information: %s',
        errorColor,
        item.id,
        item.impact,
        item.help,
        item.description,
        element,
        item.nodes[0].html,
        baseStyles,
        item.nodes[0].failureSummary,
        item.helpUrl
      );
    })
  }
}

axe.run(
  document,
  options,
  function (err, results) {
    if (err) {
      throw err;
    }
    displayResults(results);
  }
);

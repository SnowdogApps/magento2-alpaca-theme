module.exports = {
  name: 'company Structure',
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content company-structure margin-top-sl',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Company Structure',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      text: 'Company structure',
      tag: 'h1',
      class: 'heading heading--page'
    },
    businessStructureHeading: {
      tag: 'h2',
      text: 'Business Structure',
      class: 'dashboard__title'
    },
    businessStructureActions: {
      class: 'company-structure__actions',
      buttons: [
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Expand All'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Collapse All'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Add User'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Add Team'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Edit Selected'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Delete Selected'
        }
      ]
    }
  }
}

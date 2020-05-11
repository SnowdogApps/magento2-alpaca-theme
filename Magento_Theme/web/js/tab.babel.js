define(() => (config, element) => {
  const activeTitleClass   = 'tab__title--active',
    activeContentClass = 'tab__content--active',
    tabItems           = Array.from(element.children),
    stickyLabels = document.querySelectorAll('.tab__title--sticky'),
    allItems = [...tabItems, ...stickyLabels];

  function clean(item) {
    item.classList.remove(activeTitleClass);
    item.classList.remove(activeContentClass);
    item.setAttribute('aria-expanded', false);
    item.setAttribute('aria-selected', false);
  }

  function setActiveContent(item, tabTitle) {
    if (item.classList.contains('tab__content') && tabTitle === item.dataset.content) {
      item.classList.add(activeContentClass);
      item.setAttribute('aria-expanded', true);
      item.setAttribute('aria-selected', true);
    }
    else if (tabTitle === item.dataset.tab) {
      item.classList.add(activeTitleClass);
      item.setAttribute('aria-expanded', true);
      item.setAttribute('aria-selected', true);
    }
  }

  allItems.forEach(item => {
    const tabTitle = item.dataset.tab;

    if (item.classList.contains('tab__title')) {
      item.addEventListener('click', () => {
        allItems.forEach((item) => {
          clean(item);
          setActiveContent(item, tabTitle);
        });
      });
    }
  });
});

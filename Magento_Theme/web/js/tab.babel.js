define(() => (config, element) => {
  const activeTitleClass   = 'tab__title--active',
        activeContentClass = 'tab__content--active',
        children           = Array.from(element.children);

  children.forEach(item => {
    const tabTitle = item.dataset.tab;

    if (item.classList.contains('tab__title')) {
      item.addEventListener('click', () => {
        children.forEach((item) => {
          item.classList.remove(activeTitleClass);
          item.classList.remove(activeContentClass);

          if (
            item.classList.contains('tab__content')
            && tabTitle === item.dataset.content
          ) {
            item.classList.add(activeContentClass);
          }
        });

        item.classList.add(activeTitleClass);
      });
    }
  });
});

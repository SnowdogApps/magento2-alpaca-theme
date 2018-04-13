'use-strict';

define(() => (config, element) => {
  const dropdownItem      = element.querySelectorAll('.dropdown-list__item--parent .dropdown-list__label'),
        dropdownInnerItem = element.querySelectorAll('.dropdown-list__inner-item--parent .dropdown-list__inner-label'),
        activeClass       = 'open',
        innerListLevel1   = '.dropdown-list__inner-list--level1',
        innerListLevel2   = '.dropdown-list__inner-list--level2';

  function setListHeight(item) {
    return Array.from(item.children)
      .map(elem => elem.clientHeight)
      .reduce((a, b) => a + b, 0);
  }

  function setAriaAttributes(label, content, expanded) {
    if (expanded) {
      label.setAttribute('aria-expanded', 'false')
      content.setAttribute('aria-hidden', 'true');
    }
    else {
      label.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    }
  }

  function toggleSubmenu(item, inner) {
    const dropdownId = item.dataset.dropdown;
    let dropdownList = document.querySelector(`${innerListLevel1}[data-dropdown="${dropdownId}"]`),
        innerLists   = item.parentNode.querySelectorAll(innerListLevel2),
        upperList    = null;

    if (inner) {
      dropdownList = item
        .parentNode
        .querySelector(`${innerListLevel2}[data-dropdown="${dropdownId}"]`);

      innerLists = null;
      upperList  = item.closest(innerListLevel1);
    }

    item.parentNode.classList.toggle(activeClass);

    if (dropdownList && dropdownList.clientHeight > 0) {
      if (innerLists) {
        innerLists.forEach(key => {
          key.style.height = 0;
          key.parentNode.classList.remove(activeClass);

          const innerListLabel = key
            .parentNode
            .querySelector(`[data-dropdown="${key.getAttribute('id')}"]`);

          setAriaAttributes(innerListLabel, key, true);
        });
      }
      else if (upperList) {
        upperList.style.height = upperList.clientHeight - dropdownList.clientHeight + 'px';
      }

      dropdownList.style.height = 0;
      const listLabel = dropdownList
        .parentNode
        .querySelector(`[data-dropdown="${dropdownList.getAttribute('id')}"]`);

      setAriaAttributes(listLabel, dropdownList, true);
    }
    else if (dropdownList) {
      const listHeight = setListHeight(dropdownList),
            listLabel = dropdownList
              .parentNode
              .querySelector(`[data-dropdown="${dropdownList.getAttribute('id')}"]`);

      dropdownList.style.height = listHeight + 'px';
      setAriaAttributes(listLabel, dropdownList, false);

      if (upperList) {
        upperList.style.height = upperList.clientHeight + listHeight + 'px';
      }
    }
  }

  dropdownItem.forEach(
    key => key.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSubmenu(key, false);
    }, false)
  );

  dropdownInnerItem.forEach(
    key => key.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSubmenu(key, true);
    }, false)
  );
});

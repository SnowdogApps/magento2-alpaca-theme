module.exports = {
  label: 'Block Info',
  name: 'dashboard-block-info',
  context: {
    class: 'margin-bottom-m',
    titleText: 'Example title text',
    contentText: 'Content text example',
    contentClass: 'margin-bottom-0',
    link: {
      button: {
        class: 'block-info__actions',
        sides: [
          {
            action: [
              {
                link: {
                  title: 'Link',
                  text: 'Link'
                }
              }
            ]
          }
        ]
      }
    }
  }
}

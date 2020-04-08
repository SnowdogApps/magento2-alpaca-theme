module.exports = {
  label: 'Block Info',
  name: 'dashboard-block-info',
  context: {
    class: '',
    titleText: 'Example title text',
    contentText: 'Content text example',
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

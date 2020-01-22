module.exports = {
  context: {
    labelText: 'Your file (pdf, doc, max 1 MB)',
    fileName: 'File not choosen',
    id: 'file',
    input: {
      name: 'file',
      formats: '.pdf,.doc,.png',
      size: '1024'
    },
    button: {
      tag: 'span',
      class: 'file-upload__button',
      attributes: 'role="button" tabindex="0" aria-controls="file"',
      text: 'Upload a file'
    }
  },
  variants: [
    {
      name: 'native',
      label: 'Native (B2B)',
      view: 'file-upload--native.hbs',
      context: {
        class: 'file-upload--native',
        attachments: [
          {
            fileName: 'some-file.jpg',
            buttonText: 'Delete'
          },
          {
            fileName: 'some-file.jpg',
            buttonText: 'Delete'
          }
        ]
      }
    }
  ]
}

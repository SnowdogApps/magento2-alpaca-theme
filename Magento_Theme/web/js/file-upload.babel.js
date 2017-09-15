'use strict'

const inputFile = document.querySelector('.file-upload__field');

inputFile.addEventListener('change', (file) => {
  const filePath          = file.target.value,
        splitedPath       = filePath.split('\\'),
        splitedPathLength = splitedPath.length - 1;

  inputFile.parentNode.querySelector('.file-upload__name').innerHTML = splitedPath[splitedPathLength];
});

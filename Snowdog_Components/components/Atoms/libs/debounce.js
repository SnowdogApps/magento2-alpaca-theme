function debounce(callback, wait, context = this) {
  let timeout = null,
      callbackArgs = null;

  const later = () => callback.apply(context, callbackArgs);

  return function() {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}

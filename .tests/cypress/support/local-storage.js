const clear = Cypress.LocalStorage.clear

const whitelist = [
  'mage-cache-storage-section-invalidation',
  'mage-cache-storage',
  'mage-cache-timeout',
  'mage-translation-file-version',
  'mage-translation-storage',
  'private_content_version',
  'product_data_storage',
  'recently_compared_product_previous',
  'recently_compared_product',
  'recently_viewed_product_previous',
  'recently_viewed_product'
]

Cypress.LocalStorage.clear = function(keys, local, remote) {
  if (keys.length === 0) {
    keys = []
      .concat(Object.keys(this.localStorage), Object.keys(this.remoteStorage))
      .filter(key => !whitelist.includes(key))
  }

  if (keys.length > 0) {
    return clear.apply(this, [keys, local, remote])
  }
}

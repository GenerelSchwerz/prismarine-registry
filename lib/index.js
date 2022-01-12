const loader = require('./loader')

module.exports = (version) => {
  const staticData = require('minecraft-data')(version)
  const data = loader(staticData)

  let registry
  if (version.startsWith('bedrock_')) {
    registry = require('./bedrock')(data)
  } else {
    registry = require('./pc')(data)
  }

  return Object.assign(data, registry)
}
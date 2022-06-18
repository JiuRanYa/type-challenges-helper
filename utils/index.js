const urlMap = require('./const')

function getRemoteName (localName) {
  return urlMap[localName]
}

function trimTitle (args) {
  return args.join("")
}

function handleTitle (args) {
  return args.join("-")
}

module.exports = {
  getRemoteName,
  trimTitle,
  handleTitle
}
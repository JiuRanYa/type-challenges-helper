const process = require('child_process');
const path = require('path');
const urlMap = require('./const')

function getRemoteName (localName) {
  return urlMap[localName]
}

function shellAction (localName) {
  const remoteName = getRemoteName(localName)
  process.exec(`fetcher --url="https://github.com/type-challenges/type-challenges/blob/main/questions/${remoteName}/template.ts"`, {
    cwd: path.resolve(__dirname, localName)
  })
  process.exec(`fetcher --url="https://github.com/type-challenges/type-challenges/blob/main/questions/${remoteName}/test-cases.ts"`, {
    cwd: path.resolve(__dirname, localName)
  })
}

module.exports = shellAction
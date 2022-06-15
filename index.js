#!/usr/bin/env node

const path = require('path');
const fs = require('fs')
const { Command } = require('commander');
const program = new Command();
const process = require('child_process');
const { cwd } = require('process');
const urlMap = require('./lib/const')


function getRemoteName (localName) {
  return urlMap[localName]
}

function errorHandle(error) {
  if (error) {
    console.log(error)
  }
}

function shellAction (localName) {
  const remoteName = getRemoteName(localName)
  console.log(`fetching...`)

  process.exec(`fetcher --url="https://github.com/type-challenges/type-challenges/blob/main/questions/${remoteName}/template.ts"`, {
    cwd: path.resolve(cwd(), localName)
  }, errorHandle)

  process.exec(`fetcher --url="https://github.com/type-challenges/type-challenges/blob/main/questions/${remoteName}/test-cases.ts"`, {
    cwd: path.resolve(cwd(), localName)
  }, errorHandle)
}

program
  .version('0.1.0')
  .argument("<dirName>", 'folder name')
  .action((dirName) => {
    fs.mkdir(dirName, {}, () => {
      shellAction(dirName)
    })
  })

program
  .command("shell")
  .action(() => {
  })

program.parse(process.argv);



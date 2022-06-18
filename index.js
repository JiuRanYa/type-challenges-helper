#!/usr/bin/env node

const path = require('path');
const fs = require('fs')
const process = require('child_process');
const { cwd } = require('process');
const { Command } = require('commander');

const Message = require('./module/message')
const ErrorModule = require('./module/error')

const {
  getRemoteName,
  trimTitle,
  handleTitle
} = require('./utils');

const program = new Command();
const message = new Message();
const error = new ErrorModule();

function shellAction (dirName, commandDir) {
  const localName = trimTitle(dirName)
  const remoteName = getRemoteName(localName)

  if (!remoteName) {
    error.titleNotExit()
  }

  process.exec(`fetcher --url="https://github.com/type-challenges/type-challenges/blob/main/questions/${remoteName}/template.ts"`, {
    cwd: path.resolve(cwd(), commandDir)
  }, error.command())

  process.exec(`fetcher --url="https://github.com/type-challenges/type-challenges/blob/main/questions/${remoteName}/test-cases.ts"`, {
    cwd: path.resolve(cwd(), commandDir)
  }, error.command())
}

program
  .version('0.1.0')
  .argument("<dirName...>", 'folder name')
  .action((dirName) => {
    const commandDir = handleTitle(dirName)
    console.log(path.resolve(cwd(), commandDir))

    fs.mkdir(commandDir, {}, () => {
      message.loading();
      shellAction(dirName, commandDir)
    })
  })

program
  .command("shell")
  .action(() => {
  })

program.parse(process.argv);



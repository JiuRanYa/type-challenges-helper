#!/usr/bin/env node

const path = require('path');
const fs = require('fs')
const { Command } = require('commander');
const program = new Command();
const getTemplate = require('./template')

function patchAction (name, template) {
  const localPath = process.cwd()

  fs.mkdirSync(name, {})

  const templatePath = path.resolve(localPath, name, 'template.ts')
  const casePath = path.resolve(localPath, name, 'test-cases.ts')
  
  fs.writeFile(templatePath, template, () => {});
  fs.writeFile(casePath, "", () => {});
}

program
  .version('0.1.0')
  .argument("<dirName>", 'folder name')
  .action((dirName) => {
    const template = getTemplate(dirName)
    patchAction(dirName, template)
  })
program.parse(process.argv);



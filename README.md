# <div align='center' ><font size='70'>type-challenge-helper</font></div>

<p align='center'>
  <a href=''>
    <img src='https://img.shields.io/npm/v/type-challenge-helper'/>
  </a>
   <a href=''>
    <img src='https://img.shields.io/npm/l/type-challenge-helper'/>
  </a>
</p>

# Intro:
This tool will help you to fetch files from type-challenge.

Provide help when you using type-challenge to prictice. 

Enable you to use [type-challenge](https://github.com/type-challenges/type-challenges) in vscode or other editor tool.

Enable type:

- [x] warm
- [x] easy
- [x] medium
- [ ] hard
- [ ] extreme

# Before use:

when you use this tool, ensure you have 

* A folder 
* Install the typescript in your folder
* Have tsconfig.js in your folder

# Install:

```
npm install -g type-challenge-helper
```
# Usage:

![usage](https://raw.githubusercontent.com/1084350607/github-image-repo/main/type-challenge-helper/usage.webp)

 Just ensure you type the correct title in type-challenge

use like this:

```
tch (type-challenge title)
```

eg:

```
tch Pick
```

This shell will generate a dir which name is same as the title, and include two files fetch from type-challenge:
`template.ts` and `test-cases.ts`.

Then just write your code in `template.ts` and check it in `test-cases.ts`

✨TODO:

- [x] Directly fetch the template and test-cases.ts from type-challenge
- [x] implement the remaining type in const.js
- [ ] handle all the errors
- [ ] timeout and network error
- [ ] Fetch template file and typescript config
- [ ] scaffold

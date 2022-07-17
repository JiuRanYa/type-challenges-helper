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

Enable you to use [type-challenge](https://github.com/type-challenges/type-challenges) efficiently.

Enable type now:

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
npm install -g type-challenge-helper github-files-fetcher
```
# Usage:

![usage](https://raw.githubusercontent.com/1084350607/github-image-repo/main/type-challenge-helper/usage.webp)

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

# Not work？

This tools relays on your network， if you got a empty folder, follew the below:

## Setp1:
ensure you install the whole deps, run the command in your termainal

```
tch
```
then
```
fetcher
```

## step2:
try to fetch files from github

```
fetcher --url=https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/template.ts
```

if no files, means your network is bad, try to improve that

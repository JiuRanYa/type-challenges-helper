# type-challenge-helper

Beta testing...Not to use

This tool relays on your network. It will fetch files from github. You will recive a empty folder if your network is bad, error message is going to  implement. 

Provide helpe when you using type-challenge to prictice. 

Enable you to use [type-challenge](https://github.com/type-challenges/type-challenges) in vscode or other editor tool.

This tool will help you to fetch files from type-challenge.

Waitting for implement

- [x] warm
- [x] easy
- [ ] medium
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
 
> If the title is Hello World, you need to trim the title like: HelloWorld ensure the script shell get the correct params.

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
- [ ] implement the remaining type in const.js
- [ ] handle all the errors
- [ ] timeout and network error
- [ ] Fetch template file and typescript config
- [ ] scaffold

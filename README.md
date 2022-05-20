# type-challenge-helper

Provide helpe when you using type-challenge to prictice. 

Enable you to use [type-challenge](https://github.com/type-challenges/type-challenges) in vscode or other editor tool.

This tool will help you to fetch files from type-challenge.

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

```
tcc (type-challenge title)
```

eg:

```
tcc Pick
```

This shell will generate a dir which name is same as the title, and include two files fetch from type-challenge:
`template.ts` and `test-cases.ts`.

Then just write your code in `template.ts` and check it in `test-cases.ts`

✨TODO:

- [x] 直接从远端 github 获取 type-challenge 中 template 和 test-cases.ts 文件
- [ ] 补充所有const.js类型map
- [ ] 错误收集模型
- [ ] 链接错误和超时提示等
- [ ] Typescript自动配置
- [ ] 脚手架

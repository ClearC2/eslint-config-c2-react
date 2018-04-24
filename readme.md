# eslint-config-c2-react

An ESLint Shareable Config for React/JSX support in JavaScript Standard Style

## Install
```
yarn add -D husky@next eslint-config-c2-react@^1.0.0
```

Yarn will tell you what dependencies you are missing from the packages `eslint-config-c2-react` references as peer dependencies.

![dependencies](docs/deps.png)

Install these peer dependencies. At the time of creating this readme, that would look like this:

```
yarn add -D eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

Create an `.eslintrc.json` file in the root of your project with the following contents:

```json
{
    "extends": [
      "c2-react"
    ]
}
```

Create in `.eslintignore` file with files and folders that should **not** be linted. Example:
```
docs/
src/index.ejs
lib/
dist/
```

## pre-commit

Via [husky](https://github.com/typicode/husky), add the pre-commit hook to your project's `package.json` file:

```
"husky": {
  "hooks": {
    "pre-commit": "./node_modules/.bin/c2-pre-commit"
  }
},
```

## Manual linting
You can always lint your files before you attempt to commit. Example:

```
./node_modules/.bin/eslint src/module/Component.js
```

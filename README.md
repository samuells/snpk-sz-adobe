# WONDROUS NUXT TEMPLATE

> This is template for Nuxt.js project in WONDROUS LTD.

## First Steps

1. clone Repo
2. edit `name, description, author` in `package.json`
3. run `$ yarn` in root folder


## Development

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

``` bash
# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Linting

``` bash
# check for style errors/problems
$ yarn lint:scss

# autofix all possible style problems
$ yarn lint:scss --fix

# check for VUE errors/problems
$ yarn lint:vue

# autofix all possible vue problems
$ yarn lint:vue --fix

# check for all errors and probelems
$ yarn lint
```

## Normalize CSS

For normalizing of CSS is used `postcss-normalize` pluging, which takes in consideration the *browserlist* from `package.json`.

The normalize css will be imported using the `@import-normalize` statement in `global.scss` file.

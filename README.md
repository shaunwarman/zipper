# Zipper

## Overview
A command line utility to zip your files. Uses a `.zipconfig` to name the zipped files as well as an excludes listing for what files / directories to exclude.
This works well as an npm script, most commonly used to package up cloud / lambda functions.

## Install
```
npm install --save-dev zipper-config
```

## Use

### npm script
```
...
"script": {
  ...
  "zip": "zipper-config" // or zipper-config --path <path to .zipconfig>
}
```

### .zipconfig
```
name: 'zipper'
exclude:
 - .git
 - test/
 - README.md
hooks: <-- to come
  pre:
    - npm run build
  post:
    - lifecycle/post.js
```


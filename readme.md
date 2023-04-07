# dump-to-term

> This readme is automatically generated by [create-ink-app](https://github.com/vadimdemedes/create-ink-app)

NOTE:

See: https://marked.js.org/

```javascript
// remove the most common zerowidth characters from the start of the file
marked.parse(
  contents.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"")
)
```

## Install

```bash
$ npm install --global dump-to-term
```

## CLI

```
$ dump-to-term --help

  Usage
    $ dump-to-term

  Options
    --name  Your name

  Examples
    $ dump-to-term --name=Jane
    Hello, Jane
```
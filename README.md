# codemirror-binder [![npm version](https://badge.fury.io/js/codemirror-binder.svg)](https://badge.fury.io/js/codemirror-binder) [![Build Status](https://travis-ci.org/matreshkajs/codemirror-binder.svg?branch=master)](https://travis-ci.org/matreshkajs/codemirror-binder) [![Coverage Status](https://coveralls.io/repos/github/matreshkajs/codemirror-binder/badge.svg?branch=master)](https://coveralls.io/github/matreshkajs/codemirror-binder?branch=master)
> [CodeMirror](http://codemirror.net/) binder creator for Matreshka.js and defi.js

The binder creator returns a binder which initializes and binds CodeMirror instance (created using ``fromTextArea`` function) to a property.

## Usage

```
npm install --save codemirror-binder
```

```js
import { bindNode } from 'matreshka'; // or import { bindNode } from 'defi';
import codeMirrorBinder from 'codemirror-binder';

// ...
const obj = {};
bindNode(obj, 'code', textarea, codeMirrorBinder());

this.bindNode('code', textarea, codeMirrorBinder()); // for Matreshka class instances
```


### Usage in a browser environment

For non-CJS environment the bundle can be downloaded at [gh-pages branch](https://github.com/matreshkajs/codemirror-binder/tree/gh-pages).

In the browser environment the scripts exports a global variable `codeMirrorBinder`.

```html
<script src="path/to/codemirror-binder.min.js"></script>
```

```js
defi.bindNode(obj, 'code', textarea, codeMirrorBinder()); // for defi

Matreshka.bindNode(obj, 'code', textarea, codeMirrorBinder()); // for Matreshka + custom objects

this.bindNode('code', textarea, codeMirrorBinder()); // for Matreshka class instances
```

-------------


### Configuration

The function accepts one argument: configuration object which is passed into internal call of ``CodeMirror.fromTextArea``. Read the CodeMirror documentation for more info.

```js
bindNode(obj, 'code', textarea, codeMirror({
    lineNumbers: true,
    mode: 'htmlmixed'
}));
```

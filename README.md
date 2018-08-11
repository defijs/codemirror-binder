# codemirror-binder [![npm version](https://badge.fury.io/js/codemirror-binder.svg)](https://badge.fury.io/js/codemirror-binder) [![Build Status](https://travis-ci.org/matreshkajs/codemirror-binder.svg?branch=master)](https://travis-ci.org/matreshkajs/codemirror-binder) [![Coverage Status](https://coveralls.io/repos/github/matreshkajs/codemirror-binder/badge.svg?branch=master)](https://coveralls.io/github/matreshkajs/codemirror-binder?branch=master)
> [CodeMirror](http://codemirror.net/) binder creator for Matreshka.js and defi.js

The binder creator returns a binder which initializes and binds CodeMirror instance created with ``fromTextArea`` function to a property.

## Usage

```
npm install --save codemirror-binder
```

```js
import { bindNode } from 'matreshka'; // or import { bindNode } from 'defi';
import codeMirror from 'codemirror-binder';

// ...
const obj = {};
bindNode(obj, 'code', textarea, codeMirror());
```


### Usage with Matreshka.js in a browser environment

For non-CJS environment the bundle can be downloaded at [gh-pages branch](https://github.com/matreshkajs/codemirror-binder/tree/gh-pages).

In **browser environment** (or whatever environment where ``Matreshka`` is global variable)  ``Matreshka.binders`` namespace is extended.

```html
<script src="path/to/codemirror-binder.min.js"></script>
```

```js
const { codeMirror } = Matreshka.binders;
this.bindNode('code', textarea, codeMirror());

// if you don't want to create the variable
this.bindNode('code', textarea, Matreshka.binders.codeMirror());

this.code = 'alert("Hello World!");';
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

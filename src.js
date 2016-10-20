import CodeMirror from 'codemirror';

function codeMirrorBinder(config) {
    let instance;
    let changeCallback;

    return {
        on(callback) {
            changeCallback = callback;
            instance.on('change', changeCallback);
        },
        getValue() {
            instance.save();
            return instance.getValue();
        },
        setValue(value) {
            instance.setValue(value);
            instance.save();
        },
        initialize() {
            instance = CodeMirror.fromTextArea(this, config);
        },
        destroy() {
            instance.off('change', changeCallback);
            instance.toTextArea();
        }
    };
}

module.exports = codeMirrorBinder;

// extend binders object in browser environment
if (typeof Matreshka === 'function') {
    const { binders } = Matreshka;

    binders.codeMirror = codeMirrorBinder;
}

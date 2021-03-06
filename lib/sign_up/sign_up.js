// Third-party libraries
var _ = require('underscore')
  , express = require('express')
  , exports = module.exports = express()
  , app = exports;

// Don't just use, but also export in case another module needs to use these as well.
exports.callbacks    = require('./controllers/form');
exports.models       = require('./models'); 

app.set('view options', {
  layout: false
});
app.set('view engine', 'jade');

app.get('/', exports.callbacks.getForm);
app.post('/', exports.callbacks.postForm);


var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation - allows use of foundation css framework
$(document).foundation();

// App css - allows to add own css/sass
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>React App Boilerplate</p>,
  document.getElementById('app')
);

var React = require('react');
var ListItem = require('./ListItem.jsx');
var http = require('../services/httpservice.js');

var List = React.createClass({
  getInitialState: function() {
    return {ingredients: []};
  },
  componentWillMount: function() {
    http.get('/ingredients').then(function(data) {
      this.setState({ingredients: data});
    }.bind(this));
  },
  render: function() {
    var listItems = this.state.ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;

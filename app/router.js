var app = app || {}

app.TodoRouter = new (Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function(param) {
    app.TodoFilter = param || '';
    app.Todos.trigger('filter');
  }
}));

Backbone.history.start();
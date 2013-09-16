var app = app || {}

app.TodoRouter = new (Backbone.Router.extend({
  routes: {
    'filter/:action': 'setFilter',
    'edit/:id': 'editTodo',
    'delete/:id': 'deleteTodo'
  },

  setFilter: function(action) {
    app.TodoFilter = action || '';
    app.Todos.trigger('filter');
  },

  editTodo: function(id) {
    app.Todos.trigger('edit', id);
  },

  deleteTodo: function(id) {
    app.Todos.trigger('delete', id);
  }
}));

Backbone.history.start();
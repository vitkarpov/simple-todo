var app = app || {};

app.AppView = Backbone.View.extend({
  el: '.js-app',
  
  statsTemplate: _.template($('#stats-template').html()),

  events: {
    'keypress .js-new-task': 'createOnEnter',
    'click .js-clear-completed': 'clearCompleted'
  },

  initialize: function() {
    this.$input = this.$('.js-new-task');
    this.$stats = this.$('.js-stats');
    this.$stateTogglers = this.$('.js-filters-item');
    this.$tasks = this.$('.js-tasks');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);
    this.listenTo(app.Todos, 'change:completed', this.filterOne);
    this.listenTo(app.Todos, 'filter', this.filterAll);
    this.listenTo(app.Todos, 'all', this.render);

    app.Todos.fetch({ reset: true });
  },

  render: function() {
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;

    if ( !app.Todos.length ) {
      this.$el.addClass('js-app--no-tasks');
      return;
    }

    this.$el.removeClass('js-app--no-tasks');
    
    this.$stats.html(this.statsTemplate({
      completed: completed,
      remaining: remaining
    }));

    this.$todoCount = this.$('.js-stats-tasks-left');

    this.$stateTogglers
      .removeClass('filters-item--active')
      .filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
      .addClass('filters-item--active');   

    return this;    
  },

  addOne: function( todo ) {
    var view = new app.TodoView({ model: todo });
    this.$tasks.append( view.render().el );
  },

  addAll: function() {
    this.$tasks.html('');
    app.Todos.each(this.addOne, this);
  },

  filterOne: function( todo ) {
    todo.trigger('visible');
  },

  filterAll: function() {
    app.Todos.each(this.filterOne, this);
  },

  newAttributes: function() {
    return {
      title: this.$input.val().trim(),
      order: app.Todos.nextOrder(),
      completed: false
    }
  },

  createOnEnter: function(e) {
    if ( e.which !== app.settings.ENTER_KEY || !this.$input.val().trim() ) {
      return;
    }

    app.Todos.create( this.newAttributes() );
    this.$input.val('');
  },

  clearCompleted: function() {
    _.invoke(app.Todos.completed(), 'destroy');
    return false;
  }
});
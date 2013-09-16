var app = app || {};

app.AppView = Backbone.View.extend({
  el: '.js-app',
  
  statsTemplate: app.templates['stats'],

  events: {
    'keypress .js-new-task': 'createOnEnter',
    'click .js-clear-completed': 'clearCompleted',
    'focus .js-new-task': 'changeInputWrapperState',
    'blur .js-new-task': 'changeInputWrapperState'
  },

  initialize: function() {
    this.$input = this.$('.js-new-task');
    this.$inputWrapper = this.$('.new-task-wrapper');
    this.$stats = this.$('.js-stats');
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
      remaining: remaining,
      filters: [
        {
          title: "Все",
          action: "",
          active: (app.TodoFilter || '') === ''
        },
        {
          title: "Невыполненные",
          action: "active",
          active: (app.TodoFilter || '') === 'active'
        },
        {
          title: "Выполненные",
          action: "completed",
          active: (app.TodoFilter || '') === 'completed'
        }
      ]
    }));

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
  },

  changeInputWrapperState: function() {
    this.$inputWrapper.toggleClass('new-task-wrapper--focused');
  }
});
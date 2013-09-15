var app = app || {}

app.TodoView = Backbone.View.extend({
  tagName: 'li',
  
  className: 'js-tasks-item',
  
  template: _.template($('#todo-item-template').html()),
  
  events: {
    'dblclick .js-tasks-edit-trigger': 'edit',
    'keypress .js-tasks-edit': 'updateOnEnter',
    'blur .js-tasks-edit': 'close'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    this.$input = this.$('.js-tasks-edit');
    return this;
  },

  edit: function() {
    this.$el.addClass('js-tasks-item--editing');
    this.$input.focus();
  },

  close: function() {
    var value = this.$input.val().trim();

    if (value) {
      this.model.save({ title: value });
    }

    this.$el.removeClass('editing');
  },

  updateOnEnter: function(e) {
    if ( e.which === app.settings.ENTER_KEY ) {
      this.close();
    }
  }
});
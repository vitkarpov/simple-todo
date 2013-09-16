var app = app || {}

app.TodoView = Backbone.View.extend({
  tagName: 'li',
  
  // TODO:
  // tightly coherency of presentation and logical classes
  // here we could use defferent DOM-nodes
  // but problem is conceptual
  className: 'tasks-item js-tasks-item',
  
  template: app.templates['todoItem'],
  
  events: {
    'click .js-tasks-check': 'toggleCompleted',
    'keypress .js-tasks-edit': 'updateOnEnter',
    'blur .js-tasks-edit': 'close'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
    this.listenTo(this.model, 'editing', this.edit);
    this.listenTo(this.model, 'deleting', this.clear);
  },

  render: function() {
    this.$el
      .html( this.template( this.model.toJSON() ) )
      .toggleClass( 'js-tasks-item--completed', this.model.get('completed') );

    this.toggleVisible();
    this.$input = this.$('.js-tasks-edit');
    return this;
  },

  remove: function() {
    this.$el.remove();
  },

  edit: function() {
    this.$el.addClass('js-tasks-item--editing');
    this.$input
            .val( this.model.get('title') )
            .focus();
  },

  close: function() {
    var value = this.$input.val().trim();

    if (value) {
      this.model.save({ title: value });
    }

    this.$el.removeClass('js-tasks-item--editing');
    app.TodoRouter.navigate('/', { trigger: false });
  },

  updateOnEnter: function(e) {
    if ( e.which === app.settings.ENTER_KEY ) {
      this.close();
    }
  },

  toggleCompleted: function() {
    this.model.toggle();
  },

  toggleVisible: function() {
    this.$el.toggleClass('js-tasks-item--hidden', this.isHidden());
  },

  isHidden: function() {
    var isCompleted = this.model.get('completed');
    return ( 
         (!isCompleted && app.TodoFilter === 'completed')
      || (isCompleted && app.TodoFilter === 'active')
    );
  },

  clear: function() {
    this.model.destroy();
  }
});
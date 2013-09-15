var app = app || {};

/**
 * application`s settings
 * @type {Object}
 */
app.settings = {
  debug: true,
  ENTER_KEY: 13
}

$(function() {
  new app.AppView();
});
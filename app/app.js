var app = app || {};

/**
 * application`s settings
 * @type {Object}
 */
app.settings = {
  ENTER_KEY: 13,
  filters: [
    {
      title: "Все",
      action: "all"
    },
    {
      title: "Невыполненные",
      action: "active"
    },
    {
      title: "Выполненные",
      action: "completed"
    }
  ]
}

new app.AppView();
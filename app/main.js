require.config({
  baseUrl: "app",
  paths: {
    'underscore': 'libs/underscore',
    'jquery': 'libs/jquery',
    'backbone': 'libs/backbone',
    'text': 'libs/text',
    'localstorage': 'libs/localstorage'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

(function(require){
  // dummy data
  // for the first load
  // 
  // TODO: need to be loaded from localstorage model
  // if there is no data, then we need to load dummy
  var items = [
    { title: 'Start new repo on github', done: true },
    { title: 'White README about the project', done: true },
    { title: 'Finish TODO app', done: false },
    { title: 'Record tasks for project', done: false }
  ];

  require(
    ['backbone', 'views/app'],
    function(Backbone, appView) {
      console.log(Backbone);
      // new appView(items);
    }
  );
}(require));
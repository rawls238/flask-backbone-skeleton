require.config({
  paths: {
    'jquery': 'vendor/jquery/dist/jquery',
    'underscore': 'vendor/underscore/underscore',
    'backbone': 'vendor/backbone/backbone',
    'backbone.babysitter': 'vendor/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'vendor/backbone.wreqr/lib/backbone.wreqr',
    'marionette': 'vendor/backbone.marionette/lib/core/backbone.marionette'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      exports: 'Marionette',
      deps: ['backbone']
    }
  },
});

require(['app'], function(App) {
  App.start();
});
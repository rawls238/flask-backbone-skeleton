define(["marionette", "router"], function(Marionette, Router){

  var App = new Marionette.Application();

  App.addRegions({
    contentRegion: "#content"
  });

  App.on("start", function(){
    Backbone.history.start({pushState: true, root: "/"});     
  });

  // Easing development by referencing the app to be used in console for debugging.
  window.App = App;

  return App;
});
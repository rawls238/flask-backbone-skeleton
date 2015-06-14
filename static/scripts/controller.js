define(["marionette",
        "views/app"], 
  function(Marionette, AppView) {
  var MyController = Marionette.Controller.extend({
    helloBye: function() {
      alert("ROUTED");
    },

    rootUrl: function() {
      new AppView();
    }
  });

  return new MyController();
});
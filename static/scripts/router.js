define(["marionette", "controller"], function(Marionette, controller){
  var Router = new Marionette.AppRouter({

    controller: controller,
    appRoutes: {
      ""      : "rootUrl",
      "test"  : "helloBye"
    }
  });
  return Router;
});
define(['backbone'], function(Backbone) {
  var App = Backbone.View.extend({

    el: '#content',
    initialize: function() {
      this.render();
    },

    events: {
      'click .test' : 'redirect'
    },

    redirect: function() {
      Backbone.history.navigate('test', {trigger: true});
    },

    render: function() {
      this.$el.html('<div> <span class="test">Test</span></div>');
      return this;
    }
  });

  return App;
});
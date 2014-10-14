var App = Ember.Application.create ({
});

App.IndexController = Ember.ObjectController.extend ({
  favoriteColor: '',
  streetName: '',
  name: '',

  stageName: function(key, value) {
    if (arguments.length > 1) {
      var stageNameParts = value.split(/\s+/);
      this.set('favoriteColor', stageNameParts[0]);
      this.set('streetName', stageNameParts[1]);
      this.set('name', stageNameParts[2]);
    }

    return this.get('favoriteColor') + ' ' + this.get('streetName') + ' ' + this.get('name')
  }.property('favoriteColor', 'streetName', 'name')
});

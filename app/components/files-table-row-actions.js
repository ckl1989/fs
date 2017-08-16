import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createFolder(parentFolder){
      this.get('onCreateFolder')(parentFolder);

      //defer save till after enter or blur
    },
    launchModal(parentFolder){
      console.log("in launchModal");
      this.get('onLaunchModal')(parentFolder);
    }
  }
});

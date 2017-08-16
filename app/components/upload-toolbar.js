import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onNewFolder(){
      console.log("create new Folder");
      this.get("createFolder")();
    },
    
    onUploadFile(){
      console.log("in onUploadFile");
      this.get("onLaunchModal")();
    }
  }
});

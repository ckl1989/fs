import Ember from 'ember';

export default Ember.Controller.extend({
  parentFolder: null,
  actions: {
    launchModal(parentFolder){
      this.set('parentFolder', parentFolder);
      Ember.$("#myModal").modal();
    },

    createFolder(parentFolder){
      console.log("in createFolder");

      let parent = this.get('model');

      if(parentFolder){
        console.log(parentFolder);
        parent = parentFolder;
      }

      let folder = this.get('store').createRecord('folder', {
        name: "newFolder",
        parent: parent,
        size: "16KB",
        lastModified: new Date()
      });

      folder.isEditing = true;
      //defer save till after enter or blur
    },

    createFile(attachment){
      console.log("in createFile");
      let root = this.get('model');
      let parentFolder = this.get('parentFolder');
      if(!parentFolder){
        parentFolder = root;
      }

      let file = this.get('store').createRecord('file', {
        name: attachment.name,
        parent: parentFolder,
        size: attachment.size,
        lastModified: new Date(),
        attachment: attachment
      });

      file.save();
    }
  }
});


//upload on file should be disabled if no attached
//add delete

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onDownloadSelected() {
      console.log("onDownloadSelected");
      let folders = [];
      let files = [];

      let root = this.get('model');
      let traverseFileSystem = (entry) => {
        if(!entry){
          return;
        }
        entry.get('children').forEach((child)=>{
          if(child.get('isFolder')){
            if(child.get('selectedForDownload')){
              folders.push(child.get('name'));
            }else{
              traverseFileSystem(child);
            }
          }else{
            if(child.get('selectedForDownload')){
              files.push(child.get('name'));
            }
          }
        });
      };

      traverseFileSystem(root);

      console.log(folders);
      console.log(files);
    },

    onDownloadAll() {
      console.log("onDownloadAll");
      //hit link to download all
    }
  }
});

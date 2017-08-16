import Ember from 'ember';

export default Ember.Component.extend({
  downloadSelectedDisabled: Ember.computed('folder.selectedForDownload', 'folder.selectedForDownloadIndeterminate', function(){
    let folder = this.get('folder');
    let selectedForDownload = folder.get("selectedForDownload");
    let selectedForDownloadIndeterminate = folder.get("selectedForDownloadIndeterminate");

    if(selectedForDownload || selectedForDownloadIndeterminate){
      return false;
    }

    return true;
  }),

  downloadAllDisabled: Ember.computed("folder.size", function(){
    return this.get('folder.size') > 0;
  }),

  actions: {
    downloadSelected(){
      console.log("in downloadSelected");
      this.get("onDownloadSelected")();
    },

    downloadAll(){
      console.log("in downloadAll");
      this.get("onDownloadAll")();
    }
  }
});

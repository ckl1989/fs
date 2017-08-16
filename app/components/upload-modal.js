import Ember from 'ember';

export default Ember.Component.extend({
  isDisabled: Ember.computed("isFileAttached", function(){
    return !this.get('isFileAttached');
  }),

  isFileAttached: Ember.computed("uploadedAttachment", function(){
    if(this.get('uploadedAttachment')){
      return true;
    }
    return false;
  }),

  uploadedAttachment: null,

  actions:{
    uploadFileClicked(){
      console.log("in uploadFileClicked");

      let fileUploadEl = document.getElementById('file-upload-field');
      let attachment = this.get("uploadedAttachment");

      this.get('onUploadFile')(attachment);

      //reset dialog
      fileUploadEl.value = "";

      //option: convert file to base64 string and sent to backend
      //ds.string for model
    },
    fileAttached(){
      let attachment = document.getElementById('file-upload-field').files[0];
      console.log("inFileAttached: " + attachment.name);
      this.set('uploadedAttachment', attachment);
    }
  }
});

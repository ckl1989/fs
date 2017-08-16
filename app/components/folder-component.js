import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',
  isEditing: false,

  nextOffset: Ember.computed('offset', function() {
    return this.get('offset') + 1;
  }),
  
  paddingLeft: Ember.computed('offset', function() {
    return Ember.String.htmlSafe("padding-left: " + this.get('offset')*20 + "px");
  }),

  actions: {
    saveFolder(){
      console.log("saving folder: " + this.get('folder').name);

      this.get('folder').set('isEditing', false);
      this.get('folder').save();
    },

    editFolder(){
      //this will turn the row into a input instead of label
      this.get('folder').set('isEditing', true);
    },

    createFolder(parentFolder){
      this.get('onCreateFolder')(parentFolder);
    }
  }
});

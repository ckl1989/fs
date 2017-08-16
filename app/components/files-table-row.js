import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "",

  icon: Ember.computed('fileEntry', function(){
    let fileEntry = this.get('fileEntry');
    let src = "#";
    
    if(fileEntry.isFolder){
      src = Ember.String.htmlSafe("assets/images/folder.svg");
    }else if (fileEntry.isFile) {
      src = Ember.String.htmlSafe("assets/images/file.svg");
    }
    return src;
  }),

  nextLevel: Ember.computed('level', function() {
    return this.get('level') + 1;
  }),

  paddingLeft: Ember.computed('offset', function() {
    return Ember.String.htmlSafe("padding-left: " + this.get('level')*20 + "px");
  }),

  hasLink: Ember.computed('fileEntry', function(){
    let fileEntry = this.get('fileEntry');
    if(fileEntry.isFile){
      return true;
    }
    return false;
  }),

  rowChecked: false,

  isEditMode: Ember.computed('fileEntry', {
    get(key){
      return this.get('fileEntry').get('isNew');
    },
    set(key, value){
      return value;
    }
  }),

  actions: {
    saveFolder(){
      console.log("saving folder: " + this.get('fileEntry').name);

      this.set('isEditMode', false);
      this.get('fileEntry').save();
    }
  }
});

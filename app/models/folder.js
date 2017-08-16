import DS from 'ember-data';
import FileSystemEntry from './file-system-entry';
import Ember from 'ember';

export default FileSystemEntry.extend({
  children: DS.hasMany('file-system-entry', {polymorphic: true}),
  parent: DS.belongsTo('folder', {inverse: 'children'}),

  isFolder: true,
  isEditing: false,

  selectedForDownload: Ember.computed('childrenSelected', {
    get(key){
      let childrenSelectedCount = this.get('childrenSelected.length');
      let childCount = this.get('children').get('length');

      if (childrenSelectedCount === childCount && childCount > 0){
        return true;
      }
      return false;
    },

    //set all children to be same as self
    set(key,value){
      let children = this.get('children');

      children.forEach((child) => {
        child.set('selectedForDownload',value);
      });

      return value;
    }
  }),

  selectedForDownloadIndeterminate: Ember.computed('childrenSelected', 'childrenSelectedIndeterminate', function(){
    let indeterminateCount = this.get('childrenSelectedIndeterminate').get('length');
    let childCount = this.get('children').get('length');
    let childrenSelectedCount = this.get('childrenSelected.length');

    if(indeterminateCount > 0){
      return true;
    }else if (childrenSelectedCount > 0 && childrenSelectedCount < childCount) {
      return true;
    }

    return false;
  }),

  childrenSelected: Ember.computed.filterBy('children','selectedForDownload', true),
  childrenSelectedIndeterminate: Ember.computed.filterBy('children',
    'selectedForDownloadIndeterminate', true)

});

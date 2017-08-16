import DS from 'ember-data';
import FileSystemEntry from './file-system-entry';

export default FileSystemEntry.extend({
  parent: DS.belongsTo('folder'),
  
  attachment: DS.attr('file'),
  src: DS.attr('string', {
    defaultValue: "#"
  }),

  isFile: true,
  isEditing: false
});

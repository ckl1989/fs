import {belongsTo } from 'ember-cli-mirage';
import FileSystemEntry from './file-system-entry';

export default FileSystemEntry.extend({
  // folder: belongsTo(),
  // fileSystem: belongsTo()
  parent: belongsTo('folder')
});

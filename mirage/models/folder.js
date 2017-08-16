import {hasMany, belongsTo } from 'ember-cli-mirage';
import FileSystemEntry from './file-system-entry';

export default FileSystemEntry.extend({
  // files: hasMany(),
  // folders: hasMany('folder', {inverse: 'folder'}),
  // folder: belongsTo('folder', {inverse: 'folders'}),
  // fileSystem: belongsTo()
  children: hasMany('file-system-entry', {inverse: 'parent', polymorphic: true}),
  parent: belongsTo('folder', {inverse: 'children'})
});

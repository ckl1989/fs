import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  files: hasMany(),
  folders: hasMany()
});

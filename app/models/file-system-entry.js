import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  size: DS.attr('string'),
  lastModified: DS.attr('date'),

  parent: null,
  children: null,
  selectedForDownload: false
});

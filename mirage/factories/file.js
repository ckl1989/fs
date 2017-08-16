import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `File ${i}`;
  },

  size: "15KB",
  lastModified: '2010-01-01 10:00:00'
});

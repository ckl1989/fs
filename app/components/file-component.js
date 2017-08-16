import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',

  nextOffset: Ember.computed('offset', function() {
    return this.get('offset') + 1;
  }),
  paddingLeft: Ember.computed('offset', function() {
    return Ember.String.htmlSafe("padding-left: " + this.get('offset')*20 + "px");
  })
});

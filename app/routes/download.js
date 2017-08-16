import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //always find root folder
    return this.get('store').findRecord('folder', 1);
  }
});

import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';

export default Controller.extend({
  actions: {
    createLead(lead) {
      console.log(get(this,'lead'));
    }
  }
});

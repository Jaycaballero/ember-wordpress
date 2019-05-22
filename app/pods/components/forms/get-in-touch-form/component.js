import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    submit() {
      set(this, 'lead.source', 'contact us');
      return get(this, 'onSubmit')(get(this, 'lead'));
    }
  }
});

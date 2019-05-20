import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    submit(form) {
      set(this, 'lead.name', form.name);
      set(this, 'lead.phone', form.phone);
      set(this, 'lead.email', form.email);
      set(this, 'lead.message', form.message);
      return get(this, 'onSubmit')(lead);
    }
  }
});

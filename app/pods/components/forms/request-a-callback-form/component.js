import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    submit(form) {
      set(this, 'lead.email', form.email);
      set(this, 'lead.source', get(this, 'subCategoryName'));
      set(this, 'lead.message', form.message);
      set(this, 'lead.name', form.name);
      set(this, 'lead.phone', form.phone);
      return get(this, 'onSubmit')(get(this, 'lead'));
    }
  }
});

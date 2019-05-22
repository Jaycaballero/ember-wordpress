import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    submit() {
      set(this, 'lead.source', `Skill: ${get(this, 'subCategoryName')}`);
      return get(this, 'onSubmit')(get(this, 'lead'));
    }
  }
});

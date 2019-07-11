import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  classNames: ['getStarted-form'],
  actions: {
    submit() {
      set(this, 'lead.source', 'Request a Quote');
      set(this, 'lead.sourceDescription', `Course: ${get(this, 'courseName')}`);
      get(this, 'onSubmit')(get(this, 'lead'));
    }
  }
});

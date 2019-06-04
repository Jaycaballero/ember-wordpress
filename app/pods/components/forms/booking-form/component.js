import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  classNames: ['bookingForm'],
  actions: {
    submit() {
      get(this, "onSubmit")();
    }
  }
});

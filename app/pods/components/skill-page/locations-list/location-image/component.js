import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  attributeBindings: ['style'],
  classNames: ['location-img-background'],
  style: computed('iconUrl', function() {
    return htmlSafe(`background-image: url(${this.get('iconUrl')});`)
  }),
  iconUrl: null
});

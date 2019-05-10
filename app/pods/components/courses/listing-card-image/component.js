import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  attributeBindings: ['style'],
  style: computed('iconUrl', function() {
    return htmlSafe(`background-image: url(${this.get('iconUrl')});`)
  }),
  iconUrl: null
});

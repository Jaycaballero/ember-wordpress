import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  classNames: ['sub-page'],

  content: computed('_contact_Us_Template', function(){
    return htmlSafe(this.get('_contact_Us_Template.firstObject.acf.editor'));
  })

});

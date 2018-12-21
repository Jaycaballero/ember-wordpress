import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({

  textContent: computed('_branding_Section', function(){
    let texts = get(this, '_branding_Section');
    let text = texts.firstObject.content;
    return htmlSafe(text);

  })

});

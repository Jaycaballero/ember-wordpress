import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { map } from '@ember/object/computed';

export default Component.extend({

  newLink: map('_courses_Template', function(callToAction){
    return {
      linkTitle: get(callToAction, 'acf.call_to_action_link.title'),
      link: get(callToAction, 'acf.call_to_action_link.url')
    }
  }),

});

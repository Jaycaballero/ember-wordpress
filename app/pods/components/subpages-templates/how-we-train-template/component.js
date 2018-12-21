import Component from '@ember/component';
import { get } from '@ember/object';
import { map } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';


export default Component.extend({

  classNames: ['sub-page subpage-inner-content'],

  newLink: map('_how_We_Train_Template', function(callToAction){
    return {
      title: get(callToAction, 'acf.call_to_action_link.title'),
      link: get(callToAction, 'acf.call_to_action_link.url'),
    }
  }),

  content: map('_how_We_Trains', function(contentItems){
    return {
      excerpt: htmlSafe(get(contentItems, 'excerpt')),
      image: get(contentItems, 'better_featured_image.source_url'),
      itemTitle: htmlSafe(get(contentItems, 'title')),
      learnMore: get(contentItems, 'link'),
      slug: get(contentItems, 'slug'),
    }
  })

});

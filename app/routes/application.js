import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import { A } from '@ember/array';

export default Route.extend({
  mainMenu: service(),
  title: function(tokens) {
    tokens = A(tokens);
    tokens.unshift('Systematix Training');
    return tokens.reverse().join(' | ');
  },

  model() {
    return RSVP.hash({
      menu: this.get('mainMenu').request('menus/2'),
      footerMenu: this.get('mainMenu').request('menus/7'),
      socialLink: this.store.query('sociallink', {order: 'asc'}),
      contactDetails: this.store.query('contactinfo', {order: 'asc'})
    });
  },

  setupController (controller, model) {
    controller.set('menu', model.menu);
    controller.set('footerMenu', model.footerMenu);
    controller.set('socialLink', model.socialLink);
    controller.set('contactDetails', model.contactDetails);
  }

});

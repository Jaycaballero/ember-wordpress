import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  //ajax: service(),
  mainMenu: service(),

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

import ENV from '../../systematix/config/environment';

export default function() {

  this.passthrough('/https://newdev.systematix.co.uk/**');

  this.urlPrefix = ENV.APP.coursesApi.host;
  this.namespace = 'api';
  this.timing = 400;

  this.get('/courses');
  this.get('/courses/:id');
  this.get('/categories');
  this.get('/categories/:id');
  this.get('/subCategories');
  this.get('/subCategories/:id');
}

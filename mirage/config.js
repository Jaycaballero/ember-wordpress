import ENV from '../../systematix/config/environment';

export default function() {

  this.passthrough('/https://newdev.systematix.co.uk/**');
  this.passthrough('/https://www3.systematix.co.uk/**');
  this.passthrough('/https://www2.systematix.co.uk/**');
  this.passthrough('/https://www.systematix.co.uk/**');

  this.urlPrefix = ENV.APP.coursesApi.host;
  this.namespace = 'api/site';
  this.timing = 400;

  this.get('/courses');
  this.get('/courses/:id');
  this.get('/categories', ({ categories }, request) => {
    let slug = request.queryParams.slug;
    let cats = categories.all();

    if (slug) {
      cats = cats.filter(function(cat) {
        return cat.slug == slug;
      });
    }
    return cats;
  });

  this.get('/categories/:id');
  this.get('/subCategories', ({ subCategories }, request) => {
    let slug = request.queryParams.slug;
    let cats = subCategories.all();

    if (slug) {
      cats = cats.filter(function(cat) {
        return cat.slug == slug;
      });
    }
    return cats;
  });
  this.get('/subCategories/:id');
}

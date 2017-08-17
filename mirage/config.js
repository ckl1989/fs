export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/folders', (schema) => {
    return schema.folders.all();
  });

  this.get('/folders/:id');
  this.put('/folders/:id');
  this.get('/fileSystems', (schema) => {
    return schema.fileSystems.all();
  });

  this.post('/folders', (schema, request) => {
    let params = JSON.parse(request.requestBody);
    console.log(request);
    return schema.folders.create(request.requestBody);
  });

  this.post('/files', (schema, request) => {
    let params = JSON.parse(request.requestBody);
    console.log(request);
    return schema.files.create(request.requestBody);
  });

}

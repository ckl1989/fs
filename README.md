# bc-files

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [ember-cli-form-data]

## Installation

* `git clone <repository-url>` this repository
* `cd bc-files`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

##API Discussion

../../getFolders
../../createFolders

GET ${url}/folders
GET ${url}/folders/:id
POST ${url}/folders    {name:"", parent:""}
DELETE ${url}/folders/:id
PATCH ${url}/folders/:id {name:""}

GET ${url}/files
GET ${url}/files/:id
POST ${url}/files {file:""}

GET ${url}/download {file:[], folders:[]} //traverse and select on submit
GET ${url}/download {file:[]}

T_Files
[id, name, size, src, lastModified]
T_Folders
[id, name, size, lastModified]

T_FileToFolder
T_FolderToFolder

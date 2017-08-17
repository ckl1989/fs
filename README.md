# Files Brief POC
This is a POC of a file system App.

Things demonstrated in the App:
* Ability to view nested organizational folders
* Ability to create and name folders at any nesting level
* Ability to choose a file from local storage and prepare it for upload to a server
  (you can see that file is added to the Ember Data Store)
* Ability to choose individual files for download
  (you can see all file names selected for download in the console)
* Ability to choose all files for download
* Ability to choose folders for download
* Ability for UI checkbox table to know when some children row have be selected,
  thus marking parent rows as indeterminate

# Some Interesting Bits

## File Download Selection by computed properties
I used Ember computed properties on file and folder models to decide how
checkboxes should show. The reason I did this is because I am allowing the models
to act as the "internal model", so upon "Download Selected" be clicked, it would
traverse the internal models DFS style so that it returns an array of folders,
and an array of files that are selected. Files that are in folders that are selected
will be ommited from the files array. I will pass this array back to the backend,
where they can do their own DFS and prepare a well-formed ZIP of files and folders
that are selected.

## Recursive component row rendering
Rows are recursively rendered based on the children of each file entry. I tried
to make the table as abstract as possible so technically I could pass in any model
that had a "children" property and it would render as deep or wide as it needs to.

## Polymorphic and Inverse model relationships
Files and Folders have a base class of FileSystemEntry. Files belongTo Folders
and Folders belongTo Folders. Folders hasMany Folders or Files. After discussion,
we discovered that separate entities are not really needed, as we can all treat
everything as a File or FileSystemEntry.

## Data Down, Action Up
The actions by the buttons in this app all follow the DDAU pattern. Actions are declared
in the controllers of each respective route. They are then passed down to their respective
components.

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

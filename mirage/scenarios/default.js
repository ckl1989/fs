export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  // let files0 = server.createList('file', 1);
  // let files12 = server.createList('file', 2);
  // let files35 = server.createList('file', 3);
  // let files69 = server.createList('file', 4);
  //
  // var folder0 = server.create('folder', {files: files0});
  //
  // var folder1 = server.create('folder', {files: files35});
  //
  // var folder2 = server.create('folder', {files: files69, folders: [folder1]});
  //
  // server.create('file-system', {folders: [folder0, folder2], files: files12});


  let rootFolder0 = server.create('folder'); // Root

  let files1 = server.createList('file', 2); // File 0, 1
  let files2 = server.createList('file', 2); // File 2, 3
  // let files3 = server.createList('file', 2); // File 4, 5

  let folder1 = server.create('folder', {children: files1}); // Folder 1
  let folder2 = server.create('folder', {children: files2}); // Folder 2


  // let children = files2.concat(folder1).concat(folder2);
  let children = [];
  // children.push(files2[0]);
  // children.push(files2[1])
  children.push(folder1);
  children.push(folder2);
  // console.log(files2);
  rootFolder0.children = children;
  rootFolder0.save();
  //
  // let files12 = server.createList('file', 2);
  // let files35 = server.createList('file', 3);
  // let files69 = server.createList('file', 4);
  //
  // var folder1 = server.create('folder', {files: files35});
  // var folder2 = server.create('folder', {files: files69, folders: [folder1]});
  //
  // rootFolder0.children = [];

}

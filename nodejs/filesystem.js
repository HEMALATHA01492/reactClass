// Node.js => server-side JavaScript Runtime Environment
//1.
// const fs = require('fs');
// fs.stat('C:/Users/Dell/Desktop/reactclass/nodejs/filesystem.js', (err, stats) => {
//     if(err){
//         console.error(err);
//         return;
//     }
// console.log(stats)

// });
//2.check the file type-asynchronous way
//2.1
// const fs = require('fs');
// fs.stat('C:/Users/Dell/Desktop/reactclass/nodejs/', (err, stats) => {
//     if(err){
//         console.error(err);
//         return;
//     }
    // console.log(stats.isFile());
    //   console.log(stats.isDirectory());
    //   console.log(stats.isSymbolicLink());
//       console.log(stats.size);
// });

// //2.2
// const fs = require('fs');
// fs.stat('C:/Users/Dell/Desktop/reactclass/nodejs/filesystem.js', (err, stats) => {
//     if(err){
//         console.error(err);
//         return;
//     }
   // console.log(stats.isFile());
    //   console.log(stats.isDirectory());
    //   console.log(stats.isSymbolicLink());
//     console.log(stats.size);
// });



//3.blocking or synchronous
// const fs = require('fs/promises');

// async function test(){
//     try {
//         const stats = await fs.stat('C:/Users/Dell/Desktop/reactclass/nodejs/filesystem.js') 
//         console.log(stats.isFile());
//     } catch (err){
//         console.error(err);
//     }
// }

// test();

//4.to show file dirname,basename,extname(path/test.txt/.txt/test)
// const fs = require('fs/promises');
// const path= require('path');

// const test = 'C:/Users/Dell/Desktop/reactclass/nodejs/test.txt';

// console.log(path.dirname(test));
// console.log(path.basename(test));
// console.log(path.extname(test));
// console.log(path.basename(test, path.extname(test)));


///5.read file name,file
// const fs = require('fs');
// const path = require('path');

// const folderPath = 'C:/Users/Dell/Desktop/reactclass/nodejs/';

// fs.readdir(folderPath, (err, files) => {
//     if(err){
//         console.error(err);
//         return;
//     }

//     files.forEach(file => {
//         console.log(file, path.resolve(file));
//         // console.log(files);
//     });
// });

// read the contents of a file
// const fs = require('fs');

// fs.readFile('C:/Users/Dell/Desktop/reactclass/nodejs/test.txt','utf-8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data.split('\n'));
//     console.log(data);
// });

// write contents to a file to add a content to the file(flag a+ append to the content,w+ cursor go the starting position(it will replace the content),
//r+ reading and writing cursor go the final position)
// const fs = require('fs');

// fs.writeFile('C:/Users/Dell/Desktop/reactclass/nodejs/test.txt', '\nWelcome World!', {flag: 'a+'}, err => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     // file is written successfully
//     console.log('contents written to the file!');
// })

// write contents to a file to replace  content of the file
// const fs = require('fs');

// fs.writeFile('C:/Users/Dell/Desktop/reactclass/nodejs/test.txt', 'Hello World!',  err => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     // file is written successfully
//     console.log('contents written to the file!');
// })


// create a new folder in nodejs

// const fs=require('fs');
// const path=require('path');
// const folderName = 'C:/Users/Dell/Desktop/reactclass/nodejs/testDir';

// try{
//     if(! fs.existsSync(folderName)){
//         fs.mkdirSync(folderName)
//     }
// }catch(error){
//     console.error(error)
// }

// const files = fs.readdirSync('C:/Users/Dell/Desktop/reactclass/nodejs');
// console.log(files)
// files.forEach(file => {
//     const resolvedPath = path.resolve(path.join('nodejs', file));

//     fs.stat(resolvedPath, (err, stats) => {
//         if(err){

//             return;
//         }

//         console.log(resolvedPath, stats.isFile());
//     });
// });
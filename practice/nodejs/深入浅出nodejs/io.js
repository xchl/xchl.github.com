var fs = require('fs');
fs.readFile('./file1',function(){
    console.log('file1');
});
fs.readFile('./file2',function(){
    console.log('file2');
});

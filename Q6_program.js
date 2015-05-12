// Export single function with 3 arguments (dirName, extString, callback)
// 
// Export a single function that takes exactly the arguments described.
//   * Call the callback exactly once with an error or some data as described.
//   * Don't change anything else, like global variables or stdout.
//   * Handle all the errors that may occur and pass them to the callback.
//   
var fs = require('fs');
var path = require('path');


module.exports = function(dirName, extString, callback) { 

var fileList= new Array();
var extString = '.' + extString;

  fs.readdir(dirName, function(err, data){

        if (err) {
          return callback(err)
        } 
          
        data.forEach(function(fileName){
          
            var currExt = path.extname(fileName);
            if( currExt === extString){
              fileList.push(fileName);
            }
        });
        callback(null, fileList);
  });
};

var mymodule = require('./mymodule.js');
var dirName = process.argv[2];
var extString = process.argv[3];


mymodule(dirName, extString, function(err, data){

  if (err) {
    throw err;  
  } else {
    
    data.forEach(function(fileName){
      console.log(fileName);
    });
  }
});

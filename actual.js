const request = require('request');
const fs = require('fs');
let PDF2Pic = require('pdf2pic').default

const path = require('path');

const directory = 'exampleImages';

function getpdf(){
	request('http://178.128.21.6:5000/posters/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    for (let i = 0; i < body.length; i++) {
      // Pull out the serialized image data, and filename.
      serialized_image_data = body[i].serialized_image_data;
      //console.log(serialized_image_data)
      fileName = `exampleImages/out${i}.pdf`;
      fs.writeFile(fileName, serialized_image_data, 'base64', (err) => {
      if (err) console.log(err)
    });
    
}
});
	console.log('got the pdfs bro');
}

function conv(){
	request('http://178.128.21.6:5000/posters/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    for (let i = 0; i < body.length; i++) {
    	fileName = `exampleImages/out${i}.pdf`;
		let converter = new PDF2Pic({
	        density: 200,           // output pixels per inch
	        savename: `out${i}`,   // output file name
	        savedir: "exampleImages",    // output file location
	        format: "png",          // output file format
	        size: 1000               // output size in pixels
	      });
	      converter.convert(fileName).then(resolve => {
	    });
	  
  }
	})
	console.log('converted the pdfs bro');
}

function delpdf(){
	request('http://178.128.21.6:5000/posters/', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    for (let i = 0; i < body.length; i++) {
    	fileName = `exampleImages/out${i}.pdf`;
    	fs.unlinkSync(fileName);
    	/*fs.stat(fileName, function (err, stats) {
      // console.log(stats);//here we got all information of file in stats variable
      	if (err){
        	return console.log(err);
        }
      	fs.unlink(fileName,function(err){
        	if(err) return console.log(err);
      });
    });*/
    }
});
	console.log('deleted the pdfs bro');
}

function clearfolder(){
	fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
	console.log('cleared the folder for you bro');
}

function actual(){
	clearfolder();
	setTimeout(getpdf,10000);
	setTimeout(conv,20000);
	setTimeout(delpdf,30000);
}

actual();
setInterval(actual,40000);





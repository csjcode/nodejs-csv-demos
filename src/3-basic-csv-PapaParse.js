var lineReader = require('readline');
var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, '/data/MOCK_DATA.csv');

var Papa = require('papaParse');    

// This is only for metadata

var metaData = Papa.parse(filePath);
console.log(`Delimiter: ${metaData.meta.delimiter}`);

// This is for reading the file into an ibject and then using Papa

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        Papa.parse(data, {
            step: function(row) {
                console.log("Row:", row.data);
            },
            complete: function(results) {
                // console.log(results);
                console.log('Success!')
            }
        });
        
    } else {
        console.log(err);
    }
});






// var lineReader = lineReader.createInterface({
//     input: fs.createReadStream(filePath)
// });

// lineReader.on('line', function (line,i=0) {
//     console.log('Line from file, line : ', line);
//     var arrLine = line.split(',');
//     console.log('Email ' + arrLine[3])
// });


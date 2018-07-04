var lineReader = require('readline');
var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, '/data/MOCK_DATA.csv');

var lineReader = lineReader.createInterface({
    input: fs.createReadStream(filePath)
});

lineReader.on('line', function (line) {
    console.log('Line from file:', line);
    var arrLine = line.split(',');
    console.log('Email ' + arrLine[3])
});


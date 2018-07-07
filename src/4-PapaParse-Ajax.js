var request = require('request');
var path = require('path');    

var Papa = require('papaParse');    

const displayData = row => {
	if (row) { 
		return console.log(`Row: ${row}`); 
	}
}

const url = 'https://g1.freshpatents.com/MOCK_DATA.csv';

const getCSV = (urlTitle,url, urlStatus) => { 
	if(urlStatus==='inactive'){
		return console.log('This url is currently listed as Inactive.')
	}
	request.get(url, function (error, response, body) {
    	if (!error && response.statusCode == 200) {
		  var data = body;
        Papa.parse(data, {
			step: function(row) {
				displayData(row.data);
			},
			complete: function(results) {
				 // console.log(results);
				 console.log(`Url is ${urlStatus} and ${urlTitle}`);
				 console.log('Success!')
			}
	  	});
        // Continue processing here.
		}
	});
}


getCSV('This is a new URL to PARSE',url,'active');



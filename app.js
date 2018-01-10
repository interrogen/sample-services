/* 
	Starting point for the sample-services application 
*/

'use strict';

var config = require("./config");
var mongoose = require("mongoose");
var MCC = require("./models/mcc");

var db = mongoose.connect(config.database, function(err) {
	if (err) throw err;
	console.log(`Successfully connected to database: ${config.database}`);

});

MCC.findOne({mcc: '0763'}, function(err, res) {
	if (err) console.error(err);
	console.log(res);
	console.log(`MCC ${res.mcc} corresponds to ${res.edited_description}`);
});




/*

OLD STUFF

*/
/*
var http = require("http");
var querystring = require("querystring");
var mccData = require("./data/mccCodes");

var port = config.serverPort;

// try using Express

http.createServer(function(req, res) {


	if (req.url === "/") {
		console.log("Got get request");
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("Null function not supported");
	} else if (req.url === "/get") {
		console.log("Get data");
		findMCC(req, res);
	} else {
		// not found
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Invalid request");

	}

	// handle requests

}).listen(port);


console.log(`Server running on port ${port}`);
*/
//findMCC();

/*
function findMCC(req, res) {
//	console.log(`Look up mcc: ${merchantCode}`);
//	var mcc = merchantCode;
	MCC.findOne({
		"mcc": "0742"
	})
	.then( function(response) {
		if (response == null) {
			console.log("Failed lookup");
			res.status(404).json({
				Status: {
					StatusDescription: "no account found"
				}
			});
			return;
		}
		var obj = response.toObject();
		console.log(JSON.stringify(obj));
	})
	.catch(function(err) {
		console.log("Error occured" + err.toString());
	});


};


function lookupMCC(res) {
	//
	console.log("Looking up Merchant Category Code");
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("Trying to find the Merchant Category Code");
};
*/
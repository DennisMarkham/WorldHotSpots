var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");



request("https://en.wikipedia.org/wiki/Africa", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  
  // var africa = $("body").text();
//so this successful prints all the text in the body.  $ represents the html of the entire webpage

var africa = $("#mf-section-0 > p:nth-child(4)").text();
//this does not seem to print anything

  console.log(africa);
});

//anyway, 

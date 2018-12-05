/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Ibrahim Mahmoud
 * Email: mahmoudi@oregonstate.edu
 */
var express = require('express');
var expressHandlebars = require('express-handlebars');
var path = require('path');
var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;


var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;


var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var equationArray = JSON.parse(fs.readFileSync("equationData.json"));
var fractalArray = JSON.parse(fs.readFileSync("fractalData.json"));
var designArray = JSON.parse(fs.readFileSync("designData.json"));
var otherArray = JSON.parse(fs.readFileSync("otherData.json"));


app.get('/posts/:n', function (req, res, next)
{
	var index = req.params.n;
	
	if (index >= 0 && index < postArray.length)
	{
		res.status(200).render('partials/posts',
		{
			title: postArray[index].title,
			reference: postArray[index].reference,
			image1: postArray[index].image1,
			image2: postArray[index].image2,
			image3: postArray[index].image3,
			description: postArray[index].description
		});
	}
	else
		res.status(404).render('404', {});
	
});

app.get('/', function (req, res)
 {
	res.status(200).render('home');
});

app.get('/home', function (req, res)
 {
	res.status(200).render('home');
});

app.get('/home.html', function (req, res)
 {
	res.status(200).render('home');
});

app.get('/index.html', function (req, res)
 {
	res.status(200).render('home');
});

app.get('/equations', function (req, res)
 {
	res.status(200).render('equations',
	{
		equationArray: JSON.parse(fs.readFileSync("equationData.json"))
	});
});

app.get('/equations.html', function (req, res)
 {
	res.status(200).render('equations',
	{
		equationArray: JSON.parse(fs.readFileSync("equationData.json"))
	});
});

app.get('/fractals', function (req, res)
 {
	res.status(200).render('fractals',
	{
		fractalArray: JSON.parse(fs.readFileSync("fractalData.json"))
	});
});

app.get('/fractals.html', function (req, res)
 {
	res.status(200).render('fractals',
	{
		fractalArray: JSON.parse(fs.readFileSync("fractalData.json"))
	});
});

app.get('/designs', function (req, res)
 {
	res.status(200).render('designs',
	{
		designArray: JSON.parse(fs.readFileSync("designData.json"))
	});
});

app.get('/designs.html', function (req, res)
 {
	res.status(200).render('designs',
	{
		designArray: JSON.parse(fs.readFileSync("designData.json"))
	});
});

app.get('/other', function (req, res)
 {
	res.status(200).render('other',
	{
		designArray: JSON.parse(fs.readFileSync("otherData.json"))
	});
});

app.get('/other.html', function (req, res)
{
	res.status(200).render('other',
	{
		otherArray: JSON.parse(fs.readFileSync("otherData.json"))
	});
});

app.get("*", function (req, res) {
	res.status(404).render('404', {});
});

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});
/*
mongoClient.connect(mongoURL, function (err, client)
{
	if (err)
	{
		throw err;
	}
	
	mongoDB = client.db(mongoDBName);
	
	app.listen(port, function ()
	{
		console.log("== Server listening on port", port);
	});
});*/
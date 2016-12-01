var express = require('express');
var router = express.Router();
var mongodb = require('mongodb'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', function(req, res){
	var MongoClient = mongodb.MongoClient; 

	var url = 'mongodb://localhost:27017/sampleMongo'; 

	MongoClient.connect(url, function(err, db){
		if (err) {
			console.log('Unable to connect');
		}else{
			console.log('Connection established'); 

			var collection = db.collection('users'); 

			collection.find({}).toArray(function(err, result){
				if (err) {
					res.send(err);
				}else if (result.length) {
					res.render('userlist', {
						"userlist" : result
					});
				}else{
					res.send('No documents found')
				}
				db.close(); 
			});
		}
	});
});

router.get('/newuser', function(req, res){
	res.render('newuser', {title: 'Add user'});
});

router.post('/adduser', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/sampleMongo';
	MongoClient.connect(url, function(err, db){
		if (err) {
			console.log("unable to connect to server", err);

		}else{
			console.log('connceted to server');

			var collection = db.collection('users'); 

			var user1= {name: req.body.name, lastname: req.body.lastname, adresse: req.body.adresse};

			collection.insert([user1], function(err, result){
				if (err) {
					console.log(err);
				}else{
					res.redirect("thelist"); 
				}
				db.close(); 
			});
		}
	});
});

module.exports = router;

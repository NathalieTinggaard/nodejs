// require mongo and mongoclient
var MongoClient = require('mongodb').MongoClient;

//create a var with url for mongo db
var url = 'mongodb://localhost:27017/MongoDbClass';

//use the connect function

MongoClient.connect(url, function(err, db)){
	var movies = db.collection('movies');

	
};

/*MongoClient.connect(url, function(err, db){
	if (err) {
		console.log('Unable to connect'); 		
	} else {
		console.log('Connected');

		var collection = db.collection('movies');

		movies.insert({"title": "x-men", "release_year": 1999}, function(err, obj){
			if (err) {
				console.log(err);
			}else{
				console.log('object is insterted' + obj); 
			}
		});
	}
	db.close(); 
});*/
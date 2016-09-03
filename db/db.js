var fs = require("fs");

var enviroment = 'development';

var config = JSON.parse(fs.readFileSync("config.json"));

var host = config[enviroment].db_server;

var dbs = config[enviroment].db;

var port = config[enviroment].db_port;

var user = config[enviroment].db_user;

var pass = config[enviroment].db_pass;

var mongoose = require("mongoose");

console.log("Database : "+dbs);

var uri = '';

if(enviroment=='development'){

 uri = 'mongodb://'+host+":"+port+"/"+dbs;

}else{

 uri = 'mongodb:'+db+':'+pass+'//@'+host+":"+port+"/"+dbs;

}

console.log(uri)

mongoose.connect(uri);

mongoose.set('debug', true);

module.exports.mongoose = mongoose;


var Schema = mongoose.Schema;


var user = mongoose.Schema({

	id:Schema.ObjectId,
	username:String,
	password:String,
	age:Number,
	images: [],
	role:String,
	active:Boolean,
	address:{},
	dated:Date

})



var product = mongoose.Schema({

	id:Schema.ObjectId,
	product:String,
	image:String,
	price:String,
	qty:Number,
	size: [],
	dated:Date

})



// mongoose model ( TABLE_NAME , SCHEMA ) 

 var userModel = mongoose.model('user',user)

module.exports.userModel = userModel;

 var productModel = mongoose.model('product',product)

module.exports.productModel = productModel;




// datababe_Talal.table_talal.find({_id:1})


var express 				= require('express');
var cookieParser 		= require('cookie-parser');
var bodyParser 			= require('body-parser');
var methodOverride 	= require('method-override');

var app 	= express();

var port 	= process.env.PORT || 3000;
var ip 		= process.env.IP;

app.set('views', 'views');
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true } ));
app.use(cookieParser());

app.use(methodOverride("_method"));

//RESTful Routes
app.engine('html', require('ejs').renderFile);
/*========================================================================================================*/
app.get("/", function(req, res){
	res.redirect('index');
});

app.get("/index", function(req, res){
	res.render('index');
});

app.get("/company", function(req, res){
	res.render('company/company');
});

app.get("/services", function(req, res){
	res.render('services/services');
});

app.get("/services/ourOffer", function(req, res){
	res.render('services/ourOffer');
});

app.get("/services/techMethNorm", function(req, res){
	res.render('services/techMethNorm');
});

app.get("/contactUs", function(req, res){
	res.render('contactUs/contactUs');
});

/*========================================================================================================*/
app.listen(port, ip, function(){
	console.log("Node WebApp is running on port: " + port);
});

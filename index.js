/*    cookies   */
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser')
app.use(cookieParser());


app.get('/', function(req, res) { 
	res.cookie('user_name', 'Shakespeare'); // set cookies
	res.cookie('job_title', 'playwrite');  
	
	res.send("Welcome page. Cookies sent to browser with this response : user_name='Shakespeare' and job_title='playwrite' ") 
});


app.get('/plays', function(req, res){  
	// get cookie values                              
    var name = req.cookies['user_name'];  // req.cookies.user_name would also work
	var job = req.cookies.job_title;
	
	console.log("Cookies :  ", req.cookies);   // log cookies
	res.send('Plays page. Cookie values recovered in request: ' + name + ' and ' + job );
});


app.get('/age', function(req, res) {   // displays login form
	// get cookie values					   
	var name = req.cookies['user_name'];  // req.cookies.user_name would also work
	var job = req.cookies['job_title'];
	
	console.log("Cookies :  ", req.cookies);   // log cookies
	res.send('Age page. Cookie values recovered in request: ' + name + ' and ' + job );
});


app.listen(3000,  function() {
	console.log('Listening on port 3000, ctrl-c to quit');
    });

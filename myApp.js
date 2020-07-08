var bodyParser = require('body-parser')
var express = require('express');
var app = express();

app.use( bodyParser.urlencoded({extended: false}))
// --> 7)  Mount the Logger middleware here
app.use((req,res,next)=>{
  console.log(req.method+" "+ req.path+" - "+req.ip);
  next();
})

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
const absolutePth = __dirname + '/views/index.html'
app.get('/',(req,res)=>{
  res.sendFile(absolutePth)
})

/** 3) Serve an HTML file */


/** 4) Serve static assets  */

app.use(  express.static(__dirname+'/public'))

/** 5) serve JSON on a specific route */
var response = "Hello json"
app.get('/json',(req,res)=>{
  if(process.env.MESSAGE_STYLE=='uppercase')
    {
      res.json({"message": response.toUpperCase()})
    }
    else{
      res.json({"message": response}) 
    }
})
/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get("/now",(req,res,next)=>{
  req.t = new Date().toString()
  next()
},(req,res)=>{
  res.send({"time":req.t})
})

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo',(req,res)=>{
  const {word} = req.params
  res.json({echo:word})
})

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.route('/name').get((req,res)=>{
  const f =  req.query.first
  const l = req.query.last
  res.json({name: `${f} ${l}`})
})
app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

app.use(bodyParser.json())
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;

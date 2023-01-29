const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//File rendering function
app.get('/', function(req, res){
    res.render('index');
})

//app listening 
app.listen(PORT, function(){
    console.log(`Server is running on http://localhost:${PORT}/`)
})

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))

//File rendering function
app.get('/', function(req, res){
    res.render('index');
})

// app.get('/api', function(req, res){
//     res.json(['A', 'b', 'c']);
// })

//Port rendering 
app.listen(PORT, function(){
    console.log(`Server is running on http://localhost:${PORT}/`)
})

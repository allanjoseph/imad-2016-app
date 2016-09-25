var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
                var 'article-one': {
     title:'Article-One | Allan',
    heading:'article One',
    content:'This is the content and all the other cheesy stuff. so please read it carefully and make it popular'
},
                var 'article-two': {
     title:'Article-Two | Allan',
    heading:'article two',
    content:'This is the content and all the other cheesy stuff. so please read it carefully and make it popular'
},
                var 'article-three':{ title:'Article-Three | Allan',
    heading:'article one',
    content:'This is the content and all the other cheesy stuff. so please read it carefully and make it popular'}
};
function createTemplate (data){
    title=data.title;
    heading=data.heading;
    content=data.content;
    var htmlTemplate =`<html>
        <head>
            <title>
                 {$title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="Stylesheet" />
        </head>
        <body>
            <div class="container">
                 <div>   
                    <a href="/">Home</a>
                 </div>
                 <hr/>
                 <h1>
                     ${heading}
                 </h1>
                 <div>
                      Date
                 </div>
                 <div>
                      <p>
                         ${content}
                      </p>
                 </div>
            </div>     
        </body>
        </html>`;
        return htmlTemplate;
}
app.get('/', function (req, res) {res.sendFile(path.join(__dirname,'ui','index.html'))});
app.get(':/articleNames', function (req, res) {
    var articleNames=req.params.articleNames;
    res.send(createTemplate(articles[articleNames]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

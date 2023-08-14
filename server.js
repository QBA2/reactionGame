const bodyParser = require('body-parser');
const express = require();
const app = express();

let app = express(); 

// Use body-parser middleware
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies


let data = [99999];
let fastest = 9999;
let root = path.resolve(__dirname) + '/public/';
app.get('/', (req, res) => {
    res.sendFile('block.html', { 'root': root });
});
app.get('/set', function(req, res) {
    x = Number(req.query.x)
    data.push(x);
    fastest = Math.min(...data);
    console.log("fastest:" + fastest);
    console.log("data:" + data);
    res.json(fastest)
});
app.get('/get', function(req, res) {
    res.send(JSON.stringify(data));
});
app.get('/fastest',function(req,res){
    res.json(fastest)
})

app.listen(3000);
console.log("Running on port 3000");
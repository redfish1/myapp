const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send('MsgListener')
})

app.post('/em', function(req, res) {
    console.log(JSON.stringify(req.body));
    res.status(201).send();
})

app.listen(port, () => {
    console.log(`MsgListener listening on port ${port}`);
})
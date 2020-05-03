const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

//const mainRoute = require("./routes/index");
const itemsList = require('./test-data/items-list');
const categoriesList = require('./test-data/categories-list');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/items-list', (req, res) => {
    res.send(itemsList);
});

app.get('/api/categories-list', (req, res) => {
    res.send(categoriesList);
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// else {
//     app.use("/", mainRoute);
// }

app.listen(port, () => console.log(`Listening on port ${port}`));
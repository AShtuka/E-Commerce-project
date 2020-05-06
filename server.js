const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

//const mainRoute = require("./routes/index");
const category = require('./routes/category');
const product = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/category', category);
app.use('/api/product', product);


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
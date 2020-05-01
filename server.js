const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

//const mainRoute = require("./routes/index");

const data = [
    {
        id: 1,
        title: 'BLASTER NERF ELITE DISRUPTOR',
        price: 35,
        imgUrl: 'https://nerf.com.ua/wp-content/uploads/2017/04/test-2.jpg'
    },
    {
        id: 2,
        title: 'BLASTER NERF ELITE SURGEFIRE',
        price: 75,
        imgUrl: 'https://nerf.com.ua/wp-content/uploads/2018/02/E0011.jpg'
    },
    {
        id: 3,
        title: 'Nerf Fortnite Super Soaker',
        price: 15,
        imgUrl: 'https://nerf.com.ua/wp-content/uploads/2019/06/HC-E-2-600x600.jpg'
    },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/', (req, res) => {
    res.send(data);
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
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const productRoute = require('./routes/product.routes.js');

require('dotenv').config();
// console.log(process.env)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);
app.get('/', (req, res) => {
    res.send("Node Server")
});

const mongoUri = process.env.MONGODB_URI;

// MongoDB Connection
mongoose.connect(
    mongoUri
).then(
    () => {
        console.log("Connected to the database");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }
).catch(
    () => {
        console.log("Connection failed");
    }
);






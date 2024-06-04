const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const productRoute = require('./routes/product.routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);
app.get('/', (req, res) => {
    res.send("Node Server")
});

// MongoDB Connection
mongoose.connect(
    "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.zvfsill.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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






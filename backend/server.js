const express = require('express')
const cors=require('cors')

const app = express()
const port = 3005
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())



// Export mongoose
const mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var uri = "mongodb+srv://hajarber:hajarber1994@cluster0.fdug6pa.mongodb.net/?retryWrites=true&w=majority"


// Declare a variable named option and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });
	var routes = require('./routes/todoRoute'); //importing route
	routes(app);
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
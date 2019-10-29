const express = require('express');
const mongoose = require ('mongoose');
const routes = require ('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production: true") {
    app.use(express.static('client/build'));
}

app.use(routes)

mongoose.connect(process.env.MONGODO_URI || "mongoose" . . . . . .

app.listen(PORT,() => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
    
})


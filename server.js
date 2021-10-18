const express = require("express")
const routes =  require('./routes'); 
const mongoose = require('mongoose');

const app = express()

// Connexion à la database
mongoose.connect("mongodb+srv://axel:root@nodeapi.svwdg.mongodb.net/NodeApiDatabase?retryWrites=true&w=majority", {useNewUrlParser: true});

app.use(express.json())

// On applique les routes quand on accède au lien http://localhost:5000/users
app.use('/users', routes);

app.listen(5000, () => {
    console.log(`App server now listening to port ${5000}`);
  });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Création du schéma de la collection
const UserSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  location: { type: String },
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users;
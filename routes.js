const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

// J'applique la fonction getAllUsers() 
router.get('/', controllers.getAllUsers);

/* router.post('/', controllers.createUser);

router.put('/:id', controllers.updateUser);

router.delete('/:id', controllers.deleteUser); */

module.exports = router;
const users = require('./schema/model');

/**
 * Fonction permettant de récupérer tous les utilisateurs de la collection
 * 
 * @param {*} req 
 * @param {*} res : réponse de la requête
 */
exports.getAllUsers = async (req, res) => {
    try {
        const listUsers = await users.find({})
        console.log(listUsers)
        res.send(listUsers);
    } catch (error) {
        res.send(error);
    }
}

/**
 * Fonction permettant d'ajouter un utilisateur à la collection
 * 
 * @param {*} req 
 * @param {*} res : réponse de la requête
 */
exports.createUser = async (req, res) => {
    try {

    } catch (error) {
        res.send(error);
    }
}

/**
 * Fonction permettant d'éditer un utilisateur de la collection
 * 
 * @param {*} req 
 * @param {*} res : réponse de la requête
 */
exports.updateUser = async (req, res) => {
    try {


    } catch (error) {
        res.send(error)
    }
}

/**
 * Fonction permettant de supprimer un utilisateur de la collection
 * 
 * @param {*} req 
 * @param {*} res : réponse de la requête
 */
exports.deleteUser = async (req, res) => {
    try {


    } catch (error) {
        res.send(error)
    }
}
const User = require('../models/User');

const userController = {
    //GET /users
    getAllUsers: async (req, res) => {
        try{
            const users = await User.getAllUsers();
            console.log("**GET getAllUsers Sucessfull**");
            res.json(users);
        } catch (error) {
            console.log("**GET getAllUsers NOT SUCESSFULL**");
            res.status(500).json( { error: 'Database error'});
        }
    },
    createUser: async (req, res) => {
        const { name, email } = req.body;
        if (!name || !email){
            return res.status(400).json({ error: 'Name and Email required'});
        }
        try {
            const newId = await User.create(name, email);
            console.log("**POST createUser SUCESSFULL**");
            res.status(201).json({ message: 'User created', id: newId});
        } catch (error) {
            console.log("**POST createUser NOT SUCESSFULL**");
            res.status(500).json({ error: error.message});
        }
    } 

}

module.exports = userController;
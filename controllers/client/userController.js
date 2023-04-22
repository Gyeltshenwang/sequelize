const User = require('../.././models/usermodels');

const getAllUsers = async (req, res) => {
    try {
        const getUser = await User.findAll();
        res.status(201).json(getUser)
    } catch (error) {
        console.log(error)

    }

}
// create user in database
// user registeration in a data base
const postUser = async (req, res) => {
    const { Name, email, password, studentID, course } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (user == null) {
            const getRegister = await User.create({ Name, email, password, studentID, course });
            res.status(200).json({"messag":"created successfully","data":user})
        }
        else {

            res.status(302).json({ 'message': 'your email exist in a database', "data": user });
            return
        }

    } catch (error) {
        console.log(error)
    }
}
//  login user
const postUserlogin = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (user == null) {

            res.status(404).json({ 'message': 'faild user email is not registered' });
        }
        else {
            res.status(200).json({ 'message': 'successfully login '});
        }

    } catch (error) {
        console.log(error)
    }
}



// get user by id 
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        const findByid = await User.findByPk(userId);
        res.status(201).json(findByid)

    } catch (error) {
        console.log(error)

    }
}
// update user by id

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { Name, email, password, studentID, course } = req.body;


        const updateUserById = await User.update({ Name, email, password, studentID, course }, {
            where: {
                id: userId
            }
        });
        res.status(201).json(updateUserById);

    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    getAllUsers,
    postUser,
    postUserlogin,
    updateUser,
    // deleteAllUsers,
    // deleteUserById,
    // postUserById,
    getUserById


}
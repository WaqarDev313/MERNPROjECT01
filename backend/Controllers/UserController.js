const userModel = require("../Models/Users");


const UserList = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error!",
            success: false
        });
    }
};


module.exports = { UserList };

const User = require("../models/User");

const getUsers = async(req , res) =>{
    const users = await User.find();
    res.json(users);
};

const seedUsers = async (req, res) =>{
    await User.deleteMany();
      
    const users = await User.insertMany([
        {
            name: "Sara Ahmadi",
            username: "sara",
            image: "https://i.pravatar.cc/150?img=1",
            last_seen_date: "today",
        },
        {
            name: "Ali Rezaei",
            username: "ali",
            image: "https://i.pravatar.cc/150?img=2",
            last_seen_date: "yesterday",
        },
    ]);
    res.json(users);
};

module.exports = {
    getUsers,
    seedUsers,
}
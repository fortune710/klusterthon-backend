const { hashSync, compareSync } = require("bcryptjs");
const { User } = require("../models");

module.exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            const hashedPassword = hashSync(password, 10);

            const newUser = await User.create({ name, email, password: hashedPassword })
            return res.status(201).json({ message: "OK", data: { newUser } })
        }

        return res.json({ message: "Email Already In Use", data: null })
    } catch {
        return res.status(500).json({ message: "Internal Server Error" })
    }
    
}

module.exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        const isPasswordSame = compareSync(password, user.password);

        if(!isPasswordSame) {
            return res.json({ message: "Incorrect Email or Password", data: null })
        }

        return res.json({ message: "Login Successfull", data: { user } })


    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}
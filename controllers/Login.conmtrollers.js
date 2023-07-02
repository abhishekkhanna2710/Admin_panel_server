const Login = require('../models/login_Schema');

exports.getLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user with the provided username and password in the database
        const user = await Login.findOne({ username, password });

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// exports.postLogin = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         let existingUser = await Login.findOne({ username });

//         if (existingUser) {
//             // Update the existing user with the new password
//             existingUser.password = password;
//             await existingUser.save();

//             res.status(200).json({ message: 'User updated successfully' });
//         } else {
//             const newUser = new Login({ username, password });
//             await newUser.save();

//             res.status(201).json({ message: 'User created successfully' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };








exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    const id = req.params._id;
    console.log(id, "myId");
    try {

        let user = await Login.findById("649e53938c6bd755f9461162");


        if (user) {
            // User exists, update the password
            user.username = username;
            user.password = password;
            await user.save();

            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



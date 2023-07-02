const Contact = require('../models/contactUsSchema');


exports.getContact = async (req, res) => {
    try {
        const myContact = await Contact.find();

        if (!myContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }

        res.status(200).json(myContact);
    } catch (error) {
        console.error('Error:', error);

        return res.status(500).json({ error: 'An error occurred while getting the contact' });
    }
};



exports.postContact = async (req, res) => {
    try {

        const { name, phone_Number, email, message } = req.body;

        const contact_Info = await Contact.create({
            name,
            phone_Number,
            email,
            message
        })
        console.log(contact_Info)
        res.status(201).json(contact_Info);

    } catch (error) {
        console.error('Error:', error);

        return res.status(500).json({ error: 'An error occurred while posting the contact' });
    }
}


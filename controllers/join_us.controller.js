const JoinUs = require('../models/joinUsSchema.js');


exports.getJoinUs = async (req, res) => {
    try {
        const myJoinUs = await JoinUs.find();

        if (!myJoinUs) {
            return res.status(404).json({ error: 'Join us data not found' });
        }

        res.status(200).json(myJoinUs);
    } catch (error) {
        console.error('Error:', error);

        return res.status(500).json({ error: 'An error occurred while getting the Join us data' });
    }
}



exports.postJoinUs = async (req, res) => {
    try {

        const { firstname, lastname, work_email, phone_number, company_name, website_url, job_title, hear, we_help } = req.body;

        const join_us_Info = await JoinUs.create({
            firstname,
            lastname,
            work_email,
            phone_number,
            company_name,
            website_url,
            job_title,
            hear,
            we_help
        })
        console.log(join_us_Info)
        res.status(201).json(join_us_Info);

    } catch (error) {
        console.error('Error:', error);

        return res.status(500).json({ error: 'An error occurred while posting the Join us' });
    }
}



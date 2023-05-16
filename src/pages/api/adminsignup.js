import AdminUser from "../../../models/AdminUser";
import connectDB from "../../../middleware/mongoose";
var crypto = require('crypto-js');
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            console.log(req.body);
            let p = new AdminUser({
                name: req.body.name,
                email: req.body.email,
                password: crypto.AES.encrypt(req.body.password,process.env.Sec_Key).toString(),
                role:req.body.role
            });
            await p.save().then((result) => {
                res.status(200).json({ message: "User added successfully" })
            }).catch((err) => {
                res.status(400).json({ message: err.message })
                console.log(err);
            }
            )
        } catch (err) {
            res.status(400).json({ message: err.message })
            console.log(err);
        }

    }
    else {
        res.status(400).json({ message: "Invalid Request" })
    }

}
export default connectDB(handler);

import AdminUser from "../../../models/AdminUser";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require('crypto-js');
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { token } = req.body;
            console.log(token);
            jwt.verify(token, process.env.Sec_Key, (err, decoded) => {
                if (err) {
                    res.status(400).json({ success: false, message: "Invalid Token" })
                }
                else {
                    res.status(200).json({ success: true })
                }
            })

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

import User from "../../../models/User";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require('crypto-js');
var jwt=require("jsonwebtoken");
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            // console.log(req.body);
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                const bytes = CryptoJS.AES.decrypt(user.password, process.env.Sec_Key);
                let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)).toString();
                console.log(decryptedData);
                console.log(req.body.password);
                if (decryptedData === req.body.password) {
                    var token=jwt.sign({email:user.email,name:user.name},process.env.Sec_Key,{expiresIn:"2d"})
                    res.status(200).json({success:true,token:token})
                    // console.log(res);
                }
                else {
                    res.status(400).json({ message: "Invalid Email ID or Password" })
                }
            }
            else {
                res.status(400).json({ message: "User not found" })
            }
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

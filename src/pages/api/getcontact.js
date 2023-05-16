import Form from "../../../models/Form";
import connectDB from "../../../middleware/mongoose";
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { token } = req.body;
            jwt.verify(token, process.env.Sec_Key, async (err, decoded) => {

                let r = await Form.find();
                console.log(r);
                res.status(200).json({  data: r })

            })
        } catch (err) {
            res.status(400).json({ message: err.message })
            console.log(err);
            await r.save()
        }

    }
    else {
        res.status(400).json({ message: "Invalid Request" })
    }

}
export default connectDB(handler);

import Data from "../../../models/Data";
import connectDB from "../../../middleware/mongoose";
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { token, images, links, banner } = req.body;
            let r = await Data.findOneAndDelete({ name: "findtrend" });
            const str = "findtrend"
            // console.log(r);
            let newobj = ({ name: str, images: images, links: links, banner: banner })
            jwt.verify(token, process.env.Sec_Key, async (err, decoded) => {

                console.log(newobj);
                let p = new Data(newobj);
                console.log(p);
                await p.save().then((result) => {

                    res.status(200).json({ success: true, message: "Product Updated successfully" })
                }).catch((err) => {
                    res.status(400).json({ message: err.message })
                    console.log(err);
                }
                )

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

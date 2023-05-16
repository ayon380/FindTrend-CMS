import Data from "../../../models/Data";
import connectDB from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            let p = await Data.findOne({ name: "findtrend" });
            res.status(200).json(p)
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

const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
}, { timestamps: true });
mongoose.models = {};
export default mongoose.model('Form', UserSchema);
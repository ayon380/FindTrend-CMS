const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true, default: "ADuser" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });
mongoose.models = {};
export default mongoose.model('AdminUser', UserSchema);
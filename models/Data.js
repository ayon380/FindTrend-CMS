const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    name: {type:String,default:"findtrend"},
    links:{type:Array},
    banner:{type:String},
    images:{type:Array},
}, { timestamps: true });
mongoose.models = {};
export default mongoose.model('Data', DataSchema);
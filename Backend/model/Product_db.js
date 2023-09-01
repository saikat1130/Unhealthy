const mongoose = require('mongoose');
const proc = mongoose.Schema({
    category:mongoose.Types.ObjectId,
    pname:String,
    pprice:Number,
    pdiscount:Number,
    poffer:String,
    finalprice:Number,
    pimg:String,
    pd:String,


   
});
module.exports=mongoose.model("Product",proc)



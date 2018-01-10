var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var mccSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	mcc: String,
    edited_description: String,
    combined_description: String,
    usda_description: String,
    irs_description: String,
    irs_reportable: String,
    id: Number
},
{
	timestamps: true
}
);

var MCC = mongoose.model('mcc', mccSchema, 'mcc');
console.log("read mcc file");

module.exports = MCC;
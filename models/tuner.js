const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TunerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    businessName: String,
    contactInfo: {
        tel: Number,
        email: String,
        businessAddress: {
            street: String,
            city: String,
            state: String,
            zipCode: String
        }
    },
    available: {
        type: Boolean,
        default: false
    }
});

const Tuner = mongoose.model('tuner', TunerSchema);

module.exports = Tuner;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

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
    },
    geometry: GeoSchema
});

const Tuner = mongoose.model('tuner', TunerSchema);

module.exports = Tuner;
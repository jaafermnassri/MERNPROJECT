const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    birthDate: {type: String, required:true},
    university: {
        type: String,
        default: "",
        enum: ["ISSAT",'ISET', "IPEI"],
      },
    totalPrice: Number,
    days: Number,
    guests: Number,
    createdAt: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    foyer: {type: Schema.Types.ObjectId, ref: 'Foyer'}
});

module.exports = mongoose.model('Booking', bookingSchema);
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  billingInfo: {
    street: String,
    apartment: String,
    city: String,
    zip: String,
    postalCode: String,
    country: String
  }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;

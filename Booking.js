import express from 'express';
import Booking from '../models/Booking.js';  // Ensure you have a Booking model for MongoDB
import Listing from '../models/Listing.js';

const router = express.Router();

// POST route to handle booking requests
router.post('/bookings', async (req, res) => {
  const { listingId, checkIn, checkOut, totalPrice, billingInfo } = req.body;

  try {
    // Fetch the listing details from MongoDB
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    // Create a new booking document
    const newBooking = new Booking({
      listing: listingId,
      checkIn,
      checkOut,
      totalPrice,
      billingInfo
    });

    // Save the booking to the database
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating booking' });
  }
});

export default router;

const Booking = require("../models/Booking");

const addBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        res.status(201).json({
            success: true,
            message: "Booking added successfully",
            data: booking
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("packageId");

        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addBooking,
    getBookings,
    deleteBooking
};
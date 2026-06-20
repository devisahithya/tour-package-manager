const express = require("express");
const router = express.Router();

const {
    addBooking,
    getBookings,
    deleteBooking
} = require("../controllers/bookingController");

router.post("/", addBooking);
router.get("/", getBookings);
router.delete("/:id", deleteBooking);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
    addPackage,
    getPackages,
    updatePackage,
    deletePackage
} = require("../controllers/packageController");

router.post("/", addPackage);
router.get("/", getPackages);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

module.exports = router;
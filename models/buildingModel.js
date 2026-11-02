
const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema(
    {
        kodeGedung: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        namaGedung: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Building", buildingSchema);

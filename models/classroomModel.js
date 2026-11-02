
const mongoose = require("mongoose");

// Subschema untuk embedding fasilitas
const fasilitasSchema = new mongoose.Schema(
    {
        nama: {
            type: String,
            required: true,
            trim: true
        },
        tersedia: {
            type: Boolean,
            default: true
        }
    },
    {
        _id: false
    }
);

// Schema utama ruang kelas
const classroomSchema = new mongoose.Schema(
    {
        kodeRuang: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        gedung: {
            type: String,
            required: true,
            trim: true
        },
        buildingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Building",
            required: true
        },
        lantai: {
            type: Number,
            required: true,
            min: 1
        },
        kapasitas: {
            type: Number,
            required: true,
            min: 1
        },
        adaProyektor: {
            type: Boolean,
            default: false
        },
        fasilitas: {
            type: [fasilitasSchema],
            default: []
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Classroom", classroomSchema);

const express = require("express");

const router = express.Router();

const classroomController = require("../controllers/classroomController");

const cekApiKey = require("../middlewares/cekApiKey");

router.get("/", classroomController.getAll);

router.get("/:id", classroomController.getById);

router.post(
    "/",
    cekApiKey,
    classroomController.create
);

router.put(
    "/:id",
    cekApiKey,
    classroomController.update
);

router.delete(
    "/:id",
    cekApiKey,
    classroomController.remove
);

module.exports = router;

const express = require("express");
const router = express.Router();

const buildingController = require("../controllers/buildingController");
const cekApiKey = require("../middlewares/cekApiKey");

router.get("/", buildingController.getAll);
router.get("/:id", buildingController.getById);

router.post("/", cekApiKey, buildingController.create);
router.put("/:id", cekApiKey, buildingController.update);
router.delete("/:id", cekApiKey, buildingController.remove);

module.exports = router;

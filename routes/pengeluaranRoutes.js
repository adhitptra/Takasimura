const express = require("express");
const pengeluaranController = require("../controllers/pengeluaranController");

const router = express.Router();

router.post("/", pengeluaranController.uploadMiddleware, pengeluaranController.createPengeluaran);
router.get("/", pengeluaranController.getPengeluaran);
router.get("/:id", pengeluaranController.getPengeluaranById);
router.put("/:id", pengeluaranController.updatePengeluaran);
router.delete("/:id", pengeluaranController.deletePengeluaran);

module.exports = router;

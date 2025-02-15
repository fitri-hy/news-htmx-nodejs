const express = require("express");
const router = express.Router();

// Home
const HomeController = require("../controllers/HomeController");
router.get("/", HomeController.index);

// List
const TerkiniController = require("../controllers/TerkiniController");
router.get("/terkini", TerkiniController.index);

const TerpopulerController = require("../controllers/TerpopulerController");
router.get("/terpopuler", TerpopulerController.index);

const ViralController = require("../controllers/ViralController");
router.get("/viral", ViralController.index);

const PilihanController = require("../controllers/PilihanController");
router.get("/pilihan", PilihanController.index);

// Pencarian
const PencarianController = require("../controllers/PencarianController");
router.get("/pencarian", PencarianController.index);

// Berita
const BeritaController = require("../controllers/BeritaController");
router.get("/berita/:id/:slug", BeritaController.index);

// Data
const DataController = require("../controllers/data/DataController");
router.get("/data/terkini", DataController.terkini);
router.get("/data/terpopuler", DataController.terpopuler);
router.get("/data/viral", DataController.viral);
router.get("/data/pilihan", DataController.pilihan);
router.get("/data/pencarian", DataController.pencarian);
router.get("/data/berita/:id/:slug", DataController.berita);

module.exports = router;

const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const TemperamentRoutes = require("./temperament");
const DogRoutes = require("./dogs");

const router = Router();

// Configurar los routers
router.use("/temperament", TemperamentRoutes);
router.use("/dogs", DogRoutes);

module.exports = router;

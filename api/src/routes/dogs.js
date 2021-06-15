const { Router } = require("express");
const {
  getEightFirstDogs,
  getDogByParams,
  addDogByBody,
} = require("../Controllers/dogs");
const router = Router();

router.get("/", getEightFirstDogs); //obtiene los primeros 8 perros de la api //obtiene los primeros 8 perros que matcheen con la query
router.get("/:id", getDogByParams); //obtiene el perro x su id de raza
router.post("/", addDogByBody); //creaa una nueva raza y la agrega a la DB

module.exports = router;

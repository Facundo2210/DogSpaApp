require("dotenv").config();
const axios = require("axios");
const { URL_RAZAS } = require("../../constants");
const { Dog, Temperament } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { API_KEY } = process.env;

const getEightFirstDogs = async (req, res) => {
  const { name } = req.query;
  const { data } = await axios.get(`${URL_RAZAS}?api_key=${API_KEY}`);
  const DTBDogs = await Dog.findAll({ include: Temperament });
  const eightDogs = data.concat(DTBDogs);
  const FinishEightDogs = eightDogs.map(
    ({ temperament, name, image, id, weight, temperaments }) => {
      !image && (image = null);
      return { id, name, temperament, image, weight, temperaments };
    }
  );

  //Search in Front --> Eight Dogs by raza's name
  if (name) {
    const dogsFilters = FinishEightDogs.filter(
      ({ name: n }) => n.toLowerCase().includes(name.trim().toLowerCase())
      //dog.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (dogsFilters.length === 0) {
      return res.send([
        { name: `The breed you are looking for doesn't exist` },
      ]);
    }
    return res.send(dogsFilters);
  }
  //Search in Front --> Eight Dogs
  FinishEightDogs
    ? res.send(FinishEightDogs)
    : res.status(404).send({ mesagge: "Error Not Found" });
};

const getDogByParams = async (req, res) => {
  const { id } = req.params;
  if (id.includes("-")) {
    let dogFound = await Dog.findOne({
      where: { id },
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (dogFound === null) {
      return res.sendStatus(404);
    }
    return res.send(dogFound);
  }
  const { data } = await axios.get(`${URL_RAZAS}?api_key=${API_KEY}`);
  const dogsFilters = data.find(({ id: d }) => parseInt(d) === parseInt(id));
  const { weight, height, name, temperament, life_span, image } = dogsFilters;
  if (!dogsFilters) {
    return res.sendStatus(404);
  }
  let resSend = { weight, height, name, temperament, life_span, image };
  return res.send(resSend);
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const addDogByBody = async (req, res, next) => {
  const id = uuidv4();
  let { name, weight, height, life_span, temperament } = req.body; //body debe contener name,temperament/s,weight,height obligatoriamente
  if (!name || !weight || !height) {
    return res.status(404).send("Falta Algun Dato");
  }
  name = capitalize(name);
  if (!req.body) {
    return res.status(404).send("Dog is not recived");
  }
  //ver findOrCreate
  try {
    const createdDog = await Dog.create({
      id,
      name,
      weight,
      height,
      life_span,
    });

    await createdDog.setTemperaments(temperament);

    const hola = await Dog.findOne({
      where: { name },
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return res.send(hola);
  } catch (err) {
    res.send("The name is already exist");
  }
};
module.exports = {
  getEightFirstDogs,
  getDogByParams,
  addDogByBody,
};

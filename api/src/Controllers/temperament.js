require("dotenv").config();
const { Temperament } = require("../db");
const axios = require("axios");
const { URL_RAZAS } = require("../../constants");
const { API_KEY } = process.env;

const getAllTemperament = async () => {
  let allTemperaments = [];
  const { data } = await axios.get(`${URL_RAZAS}?api_key=${API_KEY}`);
  try {
    let breedTemperament = data.map(({ temperament }) => {
      return temperament;
    });
    breedTemperament.map((e) => {
      let i = e && e.split(",");
      i &&
        i.map((e) => {
          e = e.trim();
          if (allTemperaments.indexOf(e) === -1) {
            allTemperaments.push(e);
          }
        });
    });
    allTemperaments
      .sort()
      .forEach(
        async (name) => await Temperament.findOrCreate({ where: { name } })
      );
  } catch (err) {
    console.log("err");
  }
};
const getAllTemperamentDB = async (_, res) => {
  let allTemps = await Temperament.findAll();
  return res.send(allTemps);
};
module.exports = {
  getAllTemperamentDB,
  getAllTemperament,
};

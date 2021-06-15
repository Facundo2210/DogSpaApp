/* const { Temperament } = require("../db");
const axios = require("axios");
const { URL_RAZAS } = require("../../constants");

async function getAllTemperament() {
  let allTemperaments = [];
  const allDogsApi = await axios.get(URL_RAZAS);
  try {
    const allDogs = allDogsApi.data;
    let breedTemperament = allDogs.map((breed) => {
      return breed.temperament;
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
}

module.exports = {
  getAllTemperament,
};
 */

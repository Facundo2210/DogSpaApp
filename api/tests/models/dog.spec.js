/* eslint-disable no-unused-expressions */

var expect = require("chai").expect;

const { Dog, conn } = require("../../src/db.js");

describe("Routes", function () {
  beforeEach(() => Dog.sync({ force: true }));

  describe("Validations", function () {
    it("error sin title", function (done) {
      Dog.create({
        id: "4asdasd-123asd-casd123",
        name: "",
        weight: "",
        height: "",
      })
        .then(() => {
          return done(
            "No va a entrar aca porque no aporto datos suficientes, id no valida, name,weight y height no pueden ser null, "
          );
        })
        .catch(() => {
          console.log("Entra aca y recharza el create");
          done();
        });
    });
  });
});

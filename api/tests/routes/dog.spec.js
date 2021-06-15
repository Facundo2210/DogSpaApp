/* eslint-disable no-unused-expressions  */

var supertest = require("supertest-as-promised")(require("../../src/app"));
var expect = require("chai").expect;
const { Dog } = require("../../src/db.js");

describe("Routes", function () {
  beforeEach(() => Dog.sync({ force: true }));

  describe("/dogs", function () {
    it("GET responde con un array de 172 elemento al principio", function () {
      return supertest
        .get("/dogs")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body.length).to.eql(172);
        });
    });

    it("GET responde con un array", function () {
      return supertest
        .get("/dogs")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(Array.isArray(res.body)).to.eql(true);
        });
    });
  });
});

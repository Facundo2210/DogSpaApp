import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import NavBar from "./NavBar";

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("Deberia renderizar Tres <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('El Segundo Link debe tener el texto "Home" y cambiar la ruta hacia "/dogs".', () => {
    expect(wrapper.find(Link).at(1).prop("to")).toEqual("/dogs");
    expect(wrapper.find(Link).at(1).text()).toEqual("Home");
  });
  it('El Tercer Link debe tener el texto "Create Breed" y cambiar la ruta hacia "/add"', () => {
    expect(wrapper.find(Link).at(2).prop("to")).toEqual("/add");
    expect(wrapper.find(Link).at(2).text()).toEqual("Create Breed");
  });
});

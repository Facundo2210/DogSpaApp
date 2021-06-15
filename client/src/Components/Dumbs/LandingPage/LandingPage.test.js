import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import LandingPage from "./LandingPage";

configure({ adapter: new Adapter() });

describe("<LandingPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });
  it("Deberia renderizar Un <h1 />", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
  it("Renderiza el 'h1' con el texto igual a 'Welcome to my individual project' ", () => {
    expect(wrapper.find("h1").text()).toEqual(
      "Welcome to my individual project"
    );
  });

  it("Deberia renderizar Un <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('El Link debe tener el texto `Lets get started!` y cambiar la ruta hacia "/dogs".', () => {
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/dogs");
    expect(wrapper.find(Link).at(0).text()).toEqual("Lets get started!");
  });
});

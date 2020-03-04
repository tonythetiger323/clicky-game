import React from "react";
import { shallow } from "enzyme";
import NavBar from "../NavBar";

describe("NavBar", () => {
  const navbar = shallow(<NavBar />);

  it("renders correctly", () => {
    expect(navbar).toMatchSnapshot();
  });
});

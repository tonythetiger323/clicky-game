import React from "react";
import { shallow } from "enzyme";
import CharCard from "../CharCard";

describe("CharCard", () => {
  const charcard = shallow(<CharCard />);

  it("renders correctly", () => {
    expect(charcard).toMatchSnapshot();
  });
});

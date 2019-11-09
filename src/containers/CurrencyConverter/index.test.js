import React from "react";
import { shallow } from "enzyme";
import { Button, InputGroup } from "@blueprintjs/core";
import Dropdown from "../../components/dropdown";
import CurrencyConverter from ".";

const state = {
  from: "USD",
  into: "JYP",
  amount: "1",
  conversionResult: "124.34"
};

test("whether CurrencyConverter renders", () => {
  const wrapper = shallow(<CurrencyConverter />);
  expect(wrapper.exists()).toBe(true);
});

it("should render 1 Button", () => {
  const wrapper = shallow(<CurrencyConverter />);
  expect(wrapper.find(Button).length).toBe(1);
});

it("should render 2 Dropdowns", () => {
  const wrapper = shallow(<CurrencyConverter />);
  expect(wrapper.find(Dropdown).length).toBe(2);
});

it("should render 1 InputGroup", () => {
  const wrapper = shallow(<CurrencyConverter />);
  expect(wrapper.find(InputGroup).length).toBe(1);
});

it("should reset the state", () => {
  const wrapper = shallow(<CurrencyConverter />);
  wrapper.setState(state);
  wrapper.instance().resetState();
  expect(wrapper.state("amount")).toBe("1");
});

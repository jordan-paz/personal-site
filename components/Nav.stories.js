import React from "react";

import Nav from "./Nav";

export default {
  title: "Nav",
  component: Nav,
};

const Template = (args) => <Nav />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Nav",
};

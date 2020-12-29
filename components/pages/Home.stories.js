import React from "react";

import Home from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    doodle: {
      src: "/matisse.jpeg",
    },
  },
};

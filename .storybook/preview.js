import React from "react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import "../styles/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const decorators = [
  (Story) => (
    <RouterContext.Provider
      value={{
        push: () => Promise.resolve(),
        replace: () => Promise.resolve(),
        prefetch: () => Promise.resolve(),
      }}
    >
      <Story />
    </RouterContext.Provider>
  ),
];

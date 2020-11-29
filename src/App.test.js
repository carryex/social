import React from "react";
import ReactDom from "react-dom";
import SocialReactApp from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<SocialReactApp />, div);
  ReactDom.unmountComponentAtNode(div);
});

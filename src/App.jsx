import React from 'react';
import {createRoot} from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Sofiberto",
      breed: "Orange",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Chikistrikis",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Chuy Alberto",
      breed: "Orange",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
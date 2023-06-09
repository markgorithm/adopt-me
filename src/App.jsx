const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ])
}

 const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Sofiberto",
        breed: "Orange"
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Chuy Alberto",
        breed: "Orange"
      }), React.createElement(Pet, {
        animal: "Cat",
        name: "Chikistrikis",
        breed: "White"
      }), React.createElement(Pet, {
        animal: "Cat",
        name: "Beans",
        breed: "Black"
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

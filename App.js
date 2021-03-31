const App = () => (
  <div>
    <RandomChoice choices={["red", "green", "blue"]} />
    <Animal
      name="Roland"
      species="Dog"
      emoji=":)"
      isFriendly={true}
      obj={{ age: 4 }}
    />
    <Animal name="Humphery" species="Cat" emoji=":D" />
    <Animal name="Kityy" species="Cat" age={12} />
    <RandomNum />
    <Img />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

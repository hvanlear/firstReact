const App = () => (
  <div>
    <RandomChoice choices={["red", "green", "blue"]} />
    <Animal name="Roland" species="Dog" emoji=":)" isFriendly={true} />
    <Animal name="Humphery" species="Cat" emoji=":D" isFriendly={false} />
    <Animal name="Kityy" species="Cat" age={12} isFriendly />
    <RandomNum />
    <Img />
    <Bouncer age={18} />
    <Bouncer age={10} />
    <Bouncer age={23} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

const RandomChoice = (props) => {
  const idx = Math.floor(Math.random() * props.choices.length);
  const choice = props.choices[idx];
  return <h4> Random Choice : {choice}</h4>;
};

<RandomChoice choices={["red", "green", "blue"]} />;

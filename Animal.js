const Animal = (props) => {
  console.log(props);
  return (
    <ul>
      <li>{props.emoji}</li>
      <li>Name: {props.name}</li>
      <li>Species: {props.species}</li>
      <li>Age: {props.age}</li>
    </ul>
  );
};

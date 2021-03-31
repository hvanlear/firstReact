const Bouncer = (props) => {
  let reply;
  if (props.age < 18) {
    reply = "Sorry Kid you cant come in";
  } else if (props.age < 21) {
    reply = "No Drinking";
  } else {
    reply = " Welcome to the club";
  }
  return (
    <div>
      <p>
        <b>Bouncer:</b> How Old Are you:
      </p>
      <p>
        <b>You:</b> I am {props.age} years old
      </p>
      <p>
        <b>Bouncer: {reply}</b>
      </p>
    </div>
  );
};

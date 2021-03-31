const Shiba = () => {
  return (
    <img src="https://images.unsplash.com/photo-1617119552123-60b37a5947fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=940&q=80" />
  );
};

const NewImg = () => {
  return (
    <img src="https://images.unsplash.com/photo-1617033332334-1e51884abd51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" />
  );
};

const App = () => {
  return (
    <div>
      <Shiba />
      <Shiba />
      <NewImg />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

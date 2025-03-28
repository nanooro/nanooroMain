function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col absolute top-0 mt-12" id="headingWrapper">
        <h1 className="text-6xl font-bold" id="heading">
          nanooro
        </h1>
        <p className="text-xl font-helvatica" id="subtleHeading">
          
        </p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

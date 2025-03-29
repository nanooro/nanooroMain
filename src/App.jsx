function App() {
  return (
    <div className="h-full w-full" id="masterContainer">
      <div
        className="w-full flex flex-col justify-center items-center"
        id="heading"
      >
        <h1
          className="text-[20.8vw] font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
          bg-clip-text text-transparent"
          id="headingH1"
        >
          Nanooro
        </h1>
        <p className="text-[5vw]" id="subHeading">
          articles from{" "}
          <a
            href=""
            className="font-helvatica text-purple-800 underline underline-offset-2 "
          >
            @Janapriya media
          </a>
        </p>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

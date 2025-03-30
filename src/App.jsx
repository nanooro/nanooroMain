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
      <div
        className="flex flex-wrap gap-2 justify-center items-center mt-12 w-full"
        id="articlesContainer"
      >
        <CardComp imgUrl="./someImage.jpeg" title="ಚಿತ್ರದುರ್ಗ" />
        <CardComp imgUrl="https://bit.ly/3zzCTUT" title="Example title" />
        <CardComp imgUrl="https://bit.ly/3zzCTUT" title="Example title" />
        <CardComp imgUrl="https://bit.ly/3zzCTUT" title="Example title" />
      </div>{" "}
      <div className="absolute  w-full h-12 mt-24" id="footer"></div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
function CardComp({ imgUrl, title }) {
  return (
    <div aria-label="card-overlay" className="relative w-[250px] h-[300px]">
      <img
        src={imgUrl}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute flex flex-col justify-center items-center p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
        <h3 className="text-base font-bold">{title}</h3>
        <span className="text-sm text-gray-400"></span>
      </div>
    </div>
  );
}

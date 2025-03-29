console.clear();
function App() {
  return (
    <React.Fragment>
      <div className="h-screen bg-[var(--light)]" id="container">
        <div className="" id="headingWrapper">
          <h1
            className="text-6xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-pink-400 
        bg-[length:300%_300%] bg-clip-text text-transparent animate-moving-gradient"
          >
            Nanooro{" "}
          </h1>
          <p className="" id="subHeading">
            articles from{" "}
            <a href="" className="text-purple-700 underline">
              @janapriya media
            </a>
          </p>
        </div>
        {/* <ScrollBtn     /> */}
        <div
          className="w-full min-h-48 h-auto flex flex-wrap gap-5 justify-center items-center mt-[14rem]"
          id="articles"
        >
          <ArticleComp title="Example article" />
          <ArticleComp title="Example article2" />
          <ArticleComp title="Example article3" />
          <ArticleComp title="Example article4" />
          <ArticleComp title="Example article5" />
        </div>
        <div
          className="relative bottom-0 w-screen h-12 bg-transparent  text-white"
          id="footer"
        ></div>
        <h1 className="relative bottom-0">
          made by{" "}
          <a
            href=""
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 
        bg-clip-text text-transparent"
          >
            Akash.s.acharya
          </a>
        </h1>
      </div>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function ArticleComp({ title }) {
  return (
    <div
      className="bg-white w-[250px] rounded-xl shadow-xl"
      aria-label="card-overlay-v3"
    >
      <div className="w-full rounded-xl h-[250px] flex-shrink-0">
        <img
          src="https://bit.ly/3zzCTUT"
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="pb-5 mb-5 border-b border-gray-200">
          <h3 className="mb-1 text-lg font-bold">{title}</h3>
        </div>
        {/* <div className="flex items-center justify-between w-full ml-auto"></div> */}
      </div>
    </div>
  );
}

function ScrollBtn({}) {
  return (
    <button
      className="outline w-8 h-6 m-12 bg-blue rounded p-8 flex justify-center items-center"
      id="scrollBtn"
      onClick={() =>
        window.scrollTo({
          top: 350,
          behavior: "smooth",
        })
      }
    >
      scroll
    </button>
  );
}

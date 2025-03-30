console.clear();
const { useState } = React;
function App() {
  const [isModal1Open, setisModal1Open] = useState(true);
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
            <a href="https://www.youtube.com/channel/UCiIjpbV1aonM5F61JeiJ9gQ">
              @Janapriya media
            </a>
          </a>
        </p>
      </div>
      <div
        className="flex flex-wrap gap-2 justify-center items-center mt-12 w-full"
        id="articlesContainer"
      >
        {isModal1Open && <Modal1 bannerUrl="./someImage.jpeg" />}
        <CardComp imgUrl="./someImage.jpeg" title="ಚಿತ್ರದುರ್ಗ" />
        <CardComp imgUrl="https://bit.ly/3zzCTUT" title="Example title" />
        <CardComp imgUrl="https://bit.ly/3zzCTUT" title="Example title" />
        <CardComp imgUrl="https://bit.ly/3zzCTUT" title="Example title" />
      </div>{" "}
      <div
        className="absolute flex justify-center items-center w-full h-12 mt-24"
        id="footer"
      >
        {" "}
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
    </div>
  );
  function Modal1({ bannerUrl }) {
    return (
      <div
        aria-label="modal"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 w-full h-full animate-fadeIn"
      >
        <div className="flex justify-start items-center flex-col relative w-full max-w-lg p-10 bg-white w-full h-full transition-all duration-300">
          <img
            src={bannerUrl}
            alt=""
            className=" w-[100%] h-[35%] bg-cover rounded-lg"
          />
            
          <div className="absolute cursor-pointer top-5 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setisModal1Open(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  function CardComp({ imgUrl, title }) {
    return (
      <div
        aria-label="card-overlay"
        className="relative w-[250px] h-[300px]"
        onClick={() => setisModal1Open(true)}
      >
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
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

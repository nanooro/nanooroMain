console.clear();
function App() {
  const { useState } = React;
  const [isModalOpen, setisModalOpen] = useState(false);
  const modal1Content = `
  ಚಳ್ಳಕೆರೆ ನಗರಸಭಾ ಅಧ್ಯಕ್ಷರಾಗಿ ಮಂಜುಳಾ ಆರ್ ಪ್ರಸನ್ನ ಕುಮಾರ್ ನೇಮಕ
  ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲೆ ಚಳ್ಳಕೆರೆ ನಗರಸಭಾ ಅಧ್ಯಕ್ಷರಾಗಿ ಶ್ರೀಮತಿ ಮಂಜುಳಾ ಆರ್
  ಪ್ರಸನ್ನ ಕುಮಾರ್ ರವರು ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲೆಯ ವಿವಿಧ ತಾಲೂಕುಗಳಿಂದ ಆಗಮಿಸಿದ್ದ
  ವಿಶ್ವಕರ್ಮ ಕುಲ ಬಾಂಧವರ ಅಪಾರವಾದ ಜನಸ್ತೋಮದೊಂದಿಗೆ *ದಿನಾಂಕ 26/03/2025 ನೇ
  ಬುಧವಾರ ಪದವಿ ಪದಗ್ರಹಣ ಸ್ವೀಕರಿಸಿದರು ಕರ್ನಾಟಕದಲ್ಲಿ ಇದೊಂದು ಇತಿಹಾಸ
  ಸೃಷ್ಟಿಯಾದ ದಿನ ಎಂದು ಹೇಳಬಹುದು ಇದುವರೆಗೂ ವಿಶ್ವಕರ್ಮ ಸಮಾಜದ ಹೆಣ್ಣುಮಗಳು ಈ
  ಪದವಿಯನ್ನು ಸ್ವೀಕರಿಸಿರುವುದು ಇದೇ ಮೊದಲು ಎಂದು ಹೇಳಿದರು ತಪ್ಪಾಗಲಾರದು ಈ
  ಒಂದು ಸುದಿನಕ್ಕೆ ನೆರೆದಿದ್ದ ಅಪಾರವಾದ ಜನರೇ ಸಾಕ್ಷಿಯಾಯಿತು ಅಧ್ಯಕ್ಷರಾಗಿ
  ಪದವಿ ಸ್ವೀಕರಿಸಿರುವುದು ನಿಜಕ್ಕೂ ವಿಶ್ವಕರ್ಮ ಸಮಾಜವೇ ಹೆಮ್ಮೆ ಪಡುವಂತಾಗಿದ್ದು
  ಶ್ರೀಮತಿ ಮಂಜುಳಾ ಆರ್ ಪ್ರಸನ್ ಕುಮಾರ್ ರವರಿಗೆ ರಾಜಕೀಯ ಜೀವನದ ಕ್ಷೇತ್ರದಲ್ಲಿ
  ಇನ್ನೂ ಹೆಚ್ಚಿನ ಅಧಿಕಾರ ದೊಡ್ಡ ದೊಡ್ಡ ಹುದ್ದೆಗಳು ಸಿಗುವಂತಾಗಲಿ ಹಾಗೂ
  ಜನಸೇವೆಯೇ ಜನಾರ್ದನ ಸೇವೆ ಎಂದು ತಿಳಿದು ಅವರು ನಡೆಯುವಂತಾಗಲಿ ಎಂದು ಕರ್ನಾಟಕ
  ವಿಶ್ವಕರ್ಮ ಜನಸೇವಾ ಸಂಘ ಬೆಂಗಳೂರು *ರಾಜ್ಯಾಧ್ಯಕ್ಷರಾದ ಎಂ ಸೋಮಶೇಖರ್( ಕನ್ನಡ
  ಸೋಮು) ಅತ್ತಿಬೆಲೆ. ರಾಜ್ಯ ಯುವ ಘಟಕ. ರಾಜ್ಯಾಧ್ಯಕ್ಷ ದೊಡ್ಡಬಳ್ಳಾಪುರ. ಸೋಮು
  ವಿಶ್ವಕರ್ಮ ರಾಜ್ಯ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ ಹೊಸದುರ್ಗ ಪರಮೇಶ್ವರಚಾರ್ ಮಾರಬಘಟ್ಟ
  ರಾಜ್ಯ ಕಾರ್ಯದರ್ಶಿ ಮಹಿಳಾ ವಿಭಾಗ ಕು.ಗಿರಿಜಾ ಸುರೇಶಚಾರ್ *ಮೆಟ್ಟಿನ
  ಹೊಳೆ*ಹೊಸದುರ್ಗ ಇವರು ಶುಭಾಶಯ ಅಭಿನಂದನೆಗಳನ್ನು ಸಲ್ಲಿಸಿದ್ದಾರೆ
`;
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
          <ArticleComp imgUrl={"./someImage.jpeg"} title="ಚಿತ್ರದುರ್ಗ" />
          {isModalOpen && (
            <ArticleFullScreenModal
              imgUrl={"./someImage.jpeg"}
              content={modal1Content}
            />
          )}
          <ArticleComp
            imgUrl={"https://bit.ly/3zzCTUT"}
            title="Example article2"
          />
          <ArticleComp
            imgUrl={"https://bit.ly/3zzCTUT"}
            title="Example article3"
          />
          <ArticleComp
            imgUrl={"https://bit.ly/3zzCTUT"}
            title="Example article4"
          />
          {/* <ArticleComp title="Example article5" /> */}
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
  function ArticleComp({ title, imgUrl }) {
    return (
      <div
        className="bg-white w-[250px] rounded-xl shadow-xl"
        aria-label="card-overlay-v3"
      >
        <div className="w-full rounded-xl h-[250px] flex-shrink-0">
          <img
            src={imgUrl}
            alt=""
            className="object-cover w-full h-full rounded-xl"
            onClick={() => setisModalOpen(true)}
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
  function ArticleFullScreenModal({ imgUrl, content }) {
    return (
      <div className=" w-full h-full bg-gray-500 bg-opacity-50" id="modalBg">
        <div
          aria-label="modal"
          className="fixed inset-0 z-50 flex items-center justify-center  bg-black  bg-opacity-10"
        >
          <div className="relative w-full h-full p-10 bg-white rounded-lg">
            <div className="absolute cursor-pointer top-5 right-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 m-2 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setisModalOpen(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="overflow-scroll flex flex-col justify-center items-center">
              <img
                src={imgUrl}
                alt=""
                className="max-w-96 max-h-96 mt-5 object-cover w-full h-full rounded-xl"
                onClick={() => setisModalOpen(true)}
              />{" "}
              {content}
            </div>
          </div>
        </div>
        {/* <div
          className="flex flex-col w-[100%] h-[100%] z-50 absolute top-0 mt-2 bg-white "
          id="modal"
        >
  
          ಚಳ್ಳಕೆರೆ ನಗರಸಭಾ ಅಧ್ಯಕ್ಷರಾಗಿ ಮಂಜುಳಾ ಆರ್ ಪ್ರಸನ್ನ ಕುಮಾರ್ ನೇಮಕ ಚಿತ್ರದುರ್ಗ
          ಜಿಲ್ಲೆ ಚಳ್ಳಕೆರೆ ನಗರಸಭಾ ಅಧ್ಯಕ್ಷರಾಗಿ ಶ್ರೀಮತಿ ಮಂಜುಳಾ ಆರ್ ಪ್ರಸನ್ನ ಕುಮಾರ್
          ರವರು ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲೆಯ ವಿವಿಧ ತಾಲೂಕುಗಳಿಂದ ಆಗಮಿಸಿದ್ದ ವಿಶ್ವಕರ್ಮ ಕುಲ ಬಾಂಧವರ
          ಅಪಾರವಾದ ಜನಸ್ತೋಮದೊಂದಿಗೆ *ದಿನಾಂಕ 26/03/2025 ನೇ ಬುಧವಾರ ಪದವಿ ಪದಗ್ರಹಣ
          ಸ್ವೀಕರಿಸಿದರು ಕರ್ನಾಟಕದಲ್ಲಿ ಇದೊಂದು ಇತಿಹಾಸ ಸೃಷ್ಟಿಯಾದ ದಿನ ಎಂದು ಹೇಳಬಹುದು
          ಇದುವರೆಗೂ ವಿಶ್ವಕರ್ಮ ಸಮಾಜದ ಹೆಣ್ಣುಮಗಳು ಈ ಪದವಿಯನ್ನು ಸ್ವೀಕರಿಸಿರುವುದು ಇದೇ
          ಮೊದಲು ಎಂದು ಹೇಳಿದರು ತಪ್ಪಾಗಲಾರದು ಈ ಒಂದು ಸುದಿನಕ್ಕೆ ನೆರೆದಿದ್ದ ಅಪಾರವಾದ ಜನರೇ
          ಸಾಕ್ಷಿಯಾಯಿತು ಅಧ್ಯಕ್ಷರಾಗಿ ಪದವಿ ಸ್ವೀಕರಿಸಿರುವುದು ನಿಜಕ್ಕೂ ವಿಶ್ವಕರ್ಮ ಸಮಾಜವೇ
          ಹೆಮ್ಮೆ ಪಡುವಂತಾಗಿದ್ದು ಶ್ರೀಮತಿ ಮಂಜುಳಾ ಆರ್ ಪ್ರಸನ್ ಕುಮಾರ್ ರವರಿಗೆ ರಾಜಕೀಯ
          ಜೀವನದ ಕ್ಷೇತ್ರದಲ್ಲಿ ಇನ್ನೂ ಹೆಚ್ಚಿನ ಅಧಿಕಾರ ದೊಡ್ಡ ದೊಡ್ಡ ಹುದ್ದೆಗಳು
          ಸಿಗುವಂತಾಗಲಿ ಹಾಗೂ ಜನಸೇವೆಯೇ ಜನಾರ್ದನ ಸೇವೆ ಎಂದು ತಿಳಿದು ಅವರು ನಡೆಯುವಂತಾಗಲಿ
          ಎಂದು ಕರ್ನಾಟಕ ವಿಶ್ವಕರ್ಮ ಜನಸೇವಾ ಸಂಘ ಬೆಂಗಳೂರು *ರಾಜ್ಯಾಧ್ಯಕ್ಷರಾದ ಎಂ ಸೋಮಶೇಖರ್(
          ಕನ್ನಡ ಸೋಮು) ಅತ್ತಿಬೆಲೆ. ರಾಜ್ಯ ಯುವ ಘಟಕ. ರಾಜ್ಯಾಧ್ಯಕ್ಷ ದೊಡ್ಡಬಳ್ಳಾಪುರ. ಸೋಮು
          ವಿಶ್ವಕರ್ಮ ರಾಜ್ಯ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ ಹೊಸದುರ್ಗ ಪರಮೇಶ್ವರಚಾರ್ ಮಾರಬಘಟ್ಟ ರಾಜ್ಯ
          ಕಾರ್ಯದರ್ಶಿ ಮಹಿಳಾ ವಿಭಾಗ ಕು.ಗಿರಿಜಾ ಸುರೇಶಚಾರ್ *ಮೆಟ್ಟಿನ ಹೊಳೆ*ಹೊಸದುರ್ಗ ಇವರು
          ಶುಭಾಶಯ ಅಭಿನಂದನೆಗಳನ್ನು ಸಲ್ಲಿಸಿದ್ದಾರೆ
        </div> */}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

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

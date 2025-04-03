const { useState, useEffect } = React;
function App() {
  const [articleMapData, setarticleMapData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setarticleMapData(data.articles || []);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

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
        <p className="text-[4vw] -mt-6" id="subHeading">
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
        {selectedArticle && (
          <Modal
            bannerUrl={selectedArticle.articleBannerUrl}
            content={selectedArticle.articleContent}
            onClose={() => setSelectedArticle(null)}
          />
        )}
        {articleMapData.map((article, index) => (
          <CardComp
            key={index}
            imgUrl={article.articleBannerUrl}
            title={article.articleHeading}
            onClick={() => setSelectedArticle(article)}
          />
        ))}
      </div>
      <div
        className="absolute flex justify-center items-center w-full h-12 mt-24"
        id="footer"
      >
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
}

function Modal({ bannerUrl, content, onClose }) {
  return (
    <div
      aria-label="modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 w-full h-full animate-fadeIn"
    >
      <div className="overflow-scroll flex justify-start items-center flex-col relative w-full max-w-lg p-10 bg-white w-full h-full transition-all duration-300">
        <img
          src={bannerUrl}
          alt=""
          className=" w-auto h-auto bg-cover rounded-lg"
        />
        <p className="text-xl font-helvatica">{content}</p>
        <div
          className="absolute cursor-pointer top-5 right-5"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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

function CardComp({ imgUrl, title, onClick }) {
  return (
    <div
      aria-label="card-overlay"
      className="relative w-[250px] h-[300px]"
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute flex flex-col justify-center items-center p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
        <h3 className="text-base font-bold">{title}</h3>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContex";
import { imageBasePath } from "../data/api";

const TvCard = () => {
  const { tv } = useContext(GlobalContext);

  const langs = ["it", "en"];

  return tv.length ? (
    tv.map((item) => (
      <>
        <div
          key={item.id}
          className="padre tv-img my-3 mx-4 text-center w-25 position-relative"
        >
          <img
            src={imageBasePath + item.backdrop_path}
            alt={item.original_title}
            style={{
              obejctFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="hover py-2 px-2 position-absolute top-0 start-0 text-start w-100">
            <p>Titolo: {item.name}</p>
            <p>Titolo originale: {item.original_name}</p>
            {langs.includes(item.original_language) ? (
              <img
                src={`/img/flags/${item.original_language}.svg`}
                alt={item.original_language}
                className="w-25 rounded-pill mb-3"
              />
            ) : (
              <p>Lingua: {item.original_language}</p>
            )}
            <p>
              Voto: {Math.ceil(item.vote_average / 2)}
              <i className="fa-solid fa-star text-warning"></i>
            </p>
            <p>Trama: {item.overview}</p>
          </div>
        </div>
      </>
    ))
  ) : (
    <h2 className="title text-light">
      Non sono presenti Serie TV con questo nome
    </h2>
  );
};

export default TvCard;

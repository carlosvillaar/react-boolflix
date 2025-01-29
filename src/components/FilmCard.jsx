import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContex";
import { imageBasePath } from "../data/api";

const FilmCard = () => {
  const { films } = useContext(GlobalContext);

  const langs = ["it", "en"];

  return films.length ? (
    films.map((film) => (
      <>
        <div
          key={film.id}
          className="film-img my-3 mx-4 text-center w-25 position-relative"
          style={{ overflow: "hidden" }}
        >
          <img
            src={imageBasePath + film.poster_path}
            alt={film.original_title}
            style={{
              obejctFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="hover py-5 px-2 position-absolute top-0 start-0 text-start w-100">
            <p>Titolo: {film.title}</p>
            <p>Titolo originale: {film.original_title}</p>
            {langs.includes(film.original_language) ? (
              <img
                src={`/img/flags/${film.original_language}.svg`}
                alt={film.original_language}
                className="w-25 rounded-pill mb-3"
              />
            ) : (
              <p>Lingua: {film.original_language}</p>
            )}
            <p>
              Voto: {Math.ceil(film.vote_average / 2)}
              <i class="fa-solid fa-star text-warning"></i>
            </p>
            <p>Trama: {film.overview}</p>
          </div>
        </div>
      </>
    ))
  ) : (
    <h2 className="title text-light">
      Non sono presenti contenuti con questo nome
    </h2>
  );
};

export default FilmCard;

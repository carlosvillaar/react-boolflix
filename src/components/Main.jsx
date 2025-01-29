import FilmCard from "./FilmCard";
import TvCard from "./TvCard";

const Main = () => {
  return (
    <main>
      <h3 className="text-light text-center my-5">Film</h3>
      <div className="container-fluid">
        <section className="d-flex flex-wrap justify-content-center">
          <FilmCard />
        </section>
      </div>
      <h3 className="text-light text-center my-5">Serie TV</h3>
      <div className="container-fluid">
        <section className="d-flex flex-wrap justify-content-center">
          <TvCard />
        </section>
      </div>
    </main>
  );
};

export default Main;

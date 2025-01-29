import SearchBar from "./CustomSearch";

const Header = () => {
  return (
    <header className="container-fluid my-4 mb-5 d-flex justify-content-between px-5">
      <a href="#">
        <img src="/logo/Logonetflix.png" alt="logo" className="logo" />
      </a>
      <nav>
        <ul className="d-flex list-unstyled gap-5 my-4">
          <li>
            <a href="">FILM</a>
          </li>
          <li>
            <a href="">SERIE TV</a>
          </li>
          <li>
            <a href="">DOCUMENTARI</a>
          </li>
          <li>
            <a href="">INTERATTIVI</a>
          </li>
          <li>
            <a href="">SCELTI PER TE</a>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;

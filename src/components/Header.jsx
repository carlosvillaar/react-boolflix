import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContex";

const Header = () => {
  const { search, setSearch, replaceSearchParam } = useContext(GlobalContext);

  return (
    <header>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={replaceSearchParam}>Cerca</button>
    </header>
  );
};

export default Header;

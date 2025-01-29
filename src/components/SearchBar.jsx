import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContex";

const SearchBar = () => {
  const { search, setSearch, replaceSearchParam } = useContext(GlobalContext);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      replaceSearchParam();
    }
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button onClick={replaceSearchParam}>Cerca</button>
    </div>
  );
};

export default SearchBar;

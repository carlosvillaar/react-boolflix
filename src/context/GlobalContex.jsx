import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { base_api_popular_url, base_api_search_url } from "../data/api";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);
  const replaceSearchParam = () => {
    console.log("HANDPOINT", base_api_popular_url);
    if (search.length) {
      axios.get(base_api_search_url + `&query=${search}`).then((res) => {});
    } else {
      axios.get(base_api_popular_url).then((res) => {});
    }
  };

  useEffect(() => {
    replaceSearchParam();
  }, []);

  const value = {
    search,
    setSearch,
    replaceSearchParam,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };

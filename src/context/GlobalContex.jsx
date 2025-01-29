import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { base_api_popular_url, base_api_search_url } from "../data/api";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const [films, setFilms] = useState([]);

  const replaceSearchParam = () => {
    if (search.length) {
      axios.get(base_api_search_url + `&query=${search}`).then((res) => {
        setFilms(res.data.results);
      });
    } else {
      axios.get(base_api_popular_url).then((res) => {
        setFilms(res.data.results);
      });
    }
  };

  useEffect(() => {
    replaceSearchParam();
  }, []);

  const value = {
    search,
    setSearch,
    replaceSearchParam,
    films,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  base_api_popular_film_url,
  base_api_search_film_url,
  base_api_search_tv_url,
  base_api_popular_tv_url,
} from "../data/api";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const [films, setFilms] = useState([]);

  const [tv, setTv] = useState([]);

  const replaceSearchParam = () => {
    if (search.length) {
      axios.get(base_api_search_film_url + `&query=${search}`).then((res) => {
        setFilms(res.data.results);
      });
      axios.get(base_api_search_tv_url + `&query=${search}`).then((res) => {
        setTv(res.data.results);
      });
    } else {
      axios.get(base_api_popular_film_url).then((res) => {
        setFilms(res.data.results);
      });
      axios.get(base_api_popular_tv_url).then((res) => {
        setTv(res.data.results);
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
    tv,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };

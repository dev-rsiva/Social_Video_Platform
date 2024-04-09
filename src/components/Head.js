import { useState, useRef, useEffect } from "react";
import {
  YOUTUBE_IMG,
  MENU_IMG,
  USER_IMG,
  YOUTUBE_SEARCH_API,
} from "../utills/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utills/appSlice";
import { useSelector } from "react-redux";
import { cacheResults } from "../utills/searchSlice";
import { Link } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(suggestions);
  const dispatch = useDispatch();
  // const getSearchHistory = useSelector((store) => store.search.searchHistory);
  // console.log(getSearchHistory);

  const searchInputRef = useRef();
  const getSearchSuggestions = async () => {
    console.log("API CALL -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    console.log("adding new");
  };

  const searchCache = useSelector((store) => store.search);
  console.log(searchCache);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        console.log("already present");
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  console.log(searchQuery);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  console.log("/results?search_query=" + searchQuery ? searchQuery : "");

  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          alt="menu"
          src={MENU_IMG}
          className="h-8"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img alt="youtube-logo" src={YOUTUBE_IMG} className="h-8 mx-2" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            ref={searchInputRef}
            className="w-1/2 border border-gray-400 py-2 rounded-l-full px-5"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              console.log("focuses input");
              setShowSuggestions(true);
            }}
            onClick={() =>
              document.activeElement !== searchInputRef.current &&
              searchInputRef.current.blur()
            }
            // onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && suggestions?.length !== 0 && (
          <div
            className="absolute bg-white py-2 w-[30rem] rounded-md my-2"
            onMouseLeave={() => {
              setShowSuggestions(false);
              searchInputRef.current.blur();
            }}
          >
            <ul>
              {suggestions?.map((s, index) => {
                console.log("here");
                return (
                  <Link key={index} to={`/results?search_query=${s}`}>
                    <li className="py-2 px-5 shadow-sm hover:bg-gray-50">
                      🔍 {s}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img alt="user-logo" src={USER_IMG} className="h-8" />
      </div>
    </div>
  );
};

export default Head;

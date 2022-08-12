import React from "react";
import { NavHeader, SearchHeader } from "./style";
import { FaSearch} from "react-icons/fa";
import { IconContext } from "react-icons";

const Search = () => {
  return (
    <IconContext.Provider value={{ size:"16px" }}>
    
    <div>
      <NavHeader>
        <SearchHeader type="text" placeholder="Search..." />
        <FaSearch />
      </NavHeader>
    </div>
    </IconContext.Provider>
  );
}

export default Search;

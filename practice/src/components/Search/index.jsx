import React from "react";
import { Nav, SearchHeader, BtnIconSearch } from "./style";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const Search = () => {
  return (
    <IconContext.Provider value={{ size: "16px"}}>
      <div>
        <Nav>
            
          <SearchHeader type="text" placeholder="Search..."></SearchHeader>
          <BtnIconSearch>
              <FaSearch />
            </BtnIconSearch>
        </Nav>
      </div>
    </IconContext.Provider>
  );
};

export default Search;

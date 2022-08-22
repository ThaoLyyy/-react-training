import React from "react";
import { Wrapper, SearchHeader, BtnIconSearch } from "./style";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const Search = () => {
  return (
    <IconContext.Provider value={{ size: "16px" }}>

        <Wrapper>
          <SearchHeader type="text" placeholder="Search..."></SearchHeader>
          <BtnIconSearch>
            <FaSearch />
          </BtnIconSearch>
        </Wrapper>
      
    </IconContext.Provider>
  );
};

export default Search;

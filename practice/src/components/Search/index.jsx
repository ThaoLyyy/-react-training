import React from "react";
import { NavHeader, SearchHeader } from "./style";

let Search = () => {
  return (
    <div>
      <NavHeader>
        <SearchHeader type="text" placeholder="Search..." />
      </NavHeader>
    </div>
  );
}

export default Search;

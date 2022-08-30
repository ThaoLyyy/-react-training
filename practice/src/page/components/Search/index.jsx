import { useState } from "react";
import { Wrapper, SearchHeader, BtnIconSearch } from "./style";

const Search = ( {onSearch}) => {
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    setInputs(() => e.target.value);
  };
  return (
    <Wrapper>
      <SearchHeader type="text" placeholder="Search..."></SearchHeader>
      <BtnIconSearch onClick={() => {
          onSearch(inputs);
        }}>
        <i className="fas fa-search"></i>
      </BtnIconSearch>
    </Wrapper>
  );
};

export default Search;

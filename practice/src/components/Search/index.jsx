import { useState } from "react";
import { StyleWrapper, StyleSearchHeader, StyleBtnIconSearch } from "./style";

const Search = ({ onSearch }) => {
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    setInputs(() => e.target.value);
  };
  return (
    <StyleWrapper>
      <StyleSearchHeader
        type="text"
        placeholder="Search..." onChange={handleChange} 
      ></StyleSearchHeader>
      <StyleBtnIconSearch
        onClick={() => {
          onSearch(inputs);
        }}
      >
        <i className="fas fa-search"></i>
      </StyleBtnIconSearch>
    </StyleWrapper>
  );
};

export default Search;

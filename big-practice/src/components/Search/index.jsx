import { Wrapper, SearchHeader, BtnIconSearch } from "./style";

const Search = () => {
  return (
    // <IconContext.Provider value={{ size: "16px" }}>
    <Wrapper>
      <SearchHeader type="text" placeholder="Search..."></SearchHeader>
      <BtnIconSearch>
        {/* <FaSearch /> */}
        <i className="fas fa-search"></i>
      </BtnIconSearch>
    </Wrapper>
    // </IconContext.Provider>
  );
};

export default Search;

import { useState } from 'react'
import { StyleWrapper, StyleSearchHeader, StyleBtnIconSearch } from './style'

const Search = ({ onSearchInput }) => {
  const [inputValues, setInputValues] = useState('')
  const handleChange = e => {
    setInputValues(() => e.target.value)
  }

  return (
    <StyleWrapper>
      <StyleSearchHeader type="text" placeholder="Search..." onChange={handleChange}></StyleSearchHeader>
      <StyleBtnIconSearch
        onClick={() => {
          onSearchInput(inputValues)
        }}
      >
        <i className="fas fa-search"></i>
      </StyleBtnIconSearch>
    </StyleWrapper>
  )
}

export default Search

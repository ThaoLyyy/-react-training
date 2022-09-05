import { useContext, useState } from 'react'
import { StoreContext } from '../../store'
import { StyleWrapper, StyleSearchHeader, StyleBtnIconSearch } from './style'

const Search = ({ onSearch }) => {
  const [inputs, setInputs] = useState('')
  const { searchUser } = useContext(StoreContext)

  const handleChange = e => {
    setInputs(() => e.target.value)
  }
  return (
    <StyleWrapper>
      <StyleSearchHeader type="text" placeholder="Search..." onChange={handleChange}></StyleSearchHeader>
      <StyleBtnIconSearch
        onClick={() => {
          // onSearch(inputs);
          searchUser(inputs)
        }}
      >
        <i className="fas fa-search"></i>
      </StyleBtnIconSearch>
    </StyleWrapper>
  )
}

export default Search

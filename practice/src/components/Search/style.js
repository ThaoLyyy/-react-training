import styled from 'styled-components'

const StyleWrapper = styled.div`
  width: 100%;
  background-color: var(--cl--gray-100);
`
const StyleSearchHeader = styled.input`
  width: 350px;
  margin: 30px 20px 30px 600px;
  padding: 10px 20px 10px 20px;
  border: 1px solid var(--cl--light-pink-300);
  border-radius: 20px;
  &:hover {
    border: 1px solid var(--cl--light-blue-100);
  }
`
const StyleBtnIconSearch = styled.button`
  background-color: var(--cl--light-pink-300);
  color: var(--cl--white-100);
  font-size: var(--font-size-xmd);
  border: none;
  padding: 8px;
  border-radius: 8px;
  margin: -15px;
  &:hover {
    background: var(--cl--light-blue-100);
  }
`

export { StyleWrapper, StyleSearchHeader, StyleBtnIconSearch }

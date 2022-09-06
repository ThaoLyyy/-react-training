import styled from 'styled-components'

const StyleWrapper = styled.div`
  width: 100%;
  background-color: var(--cl--gray-100);
`
const StyleSearchHeader = styled.input`
  width: 350px;
  margin: var(--margin-3x-l) var(--margin-x-lg) var(--margin-3x-l) var(--margin-6xx-lg);
  padding: var(--padding-x-sm) var(--padding-x-lg);
  border: 1px solid var(--cl--light-pink-300);
  border-radius: 20px;
  &:hover {
    border: 1px solid var(--cl--light-blue-100);
  }
`
const StyleBtnIconSearch = styled.a`
  background-color: var(--cl--light-pink-300);
  color: var(--cl--white-100);
  font-size: var(--font-size-xmd);
  padding: var(--padding-xx-sm);
  margin: var(--margin-xxx-sm);
  border: none;
  border-radius: 8px;
  &:hover {
    background: var(--cl--light-blue-100);
  }
`

export { StyleWrapper, StyleSearchHeader, StyleBtnIconSearch }

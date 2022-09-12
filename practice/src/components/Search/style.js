import styled from 'styled-components'

const StyleWrapper = styled.div`
  width: 100%;
  background-color: var(--cl--gray-100);
`
const StyleSearchHeader = styled.input`
  width: 370px;
  margin: var(--margin-3x-l) var(--margin-x-lg) var(--margin-3x-l) var(--margin-6xx-lg);
  padding: var(--padding-x-sm) var(--padding-sm);
  border: 1px solid var(--cl--light-pink-300);
  border-radius: 30px;
  font-family: inherit;
  font-size: inherit;
  padding-inline-end: 44px;
  padding-inline-start: 26px;
  &:hover {
    border: 1px solid var(--cl--light-blue-100);
  }
`
const StyleBtnIconSearch = styled.button`
  background-color: var(--cl--light-pink-300);
  color: var(--cl--white-100);
  font-size: var(--font-size-xmd);
  padding: var(--padding-x-sm);
  margin-left: 1000px;
  border: none;
  border-radius: 50%;
  left: 6px;
  position: absolute;
  top: 32px;
  &:hover {
    background: var(--cl--light-blue-100);
  }
`

export { StyleWrapper, StyleSearchHeader, StyleBtnIconSearch }

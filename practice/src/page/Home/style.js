import styled from 'styled-components'

const StyleSection = styled.section`
  min-height: 100vh;
`
const StyleContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: var(--margin) auto;
  padding: var(--padding);
`
const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
`
const StyleRow = styled.div`
  min-height: 100vh;
  width: 110%;
  position: relative;
`
const StyleTitleList = styled.h2`
  font-size: var(--font-size-2xlg);
  color: var(--cl--gray-400);
  font-family: 'Roboto-Bold';
  text-transform: capitalize;
  font-weight: 600;
  margin: var(--margin-md) 0 0 var(--margin-3x-lg);
`

export { StyleSection, StyleWrapper, StyleContainer, StyleRow, StyleTitleList }

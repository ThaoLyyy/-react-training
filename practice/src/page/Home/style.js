import styled from 'styled-components'

const Section = styled.section`
  min-height: 100vh;
`
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: var(--margin) auto;
  padding: var(--padding);
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`
const Row = styled.div`
  min-height: 100vh;
  width: 110%;
  position: relative;
`
const TitleList = styled.h2`
  font-size: var(--font-size-2xlg);
  color: var(--cl--gray-400);
  font-family: 'Roboto-Bold';
  text-transform: capitalize;
  font-weight: 600;
  margin: var(--margin-md) 0 0 var(--margin-3x-lg);
`

export { Section, Wrapper, Container, Row, TitleList }

import styled from 'styled-components'
import UserImage from '../../assets/images/logo-users.png'

const StylePageHeader = styled.header`
  height: 100%;
`
const StyleContainerHeader = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: var(--margin) auto;
  padding: var(--padding);
`
const StyleWrapperLogo = styled.div`
  width: 300px;
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  margin: var(--margin-x-lg);
  position: fixed;
`
const StyleTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Roboto-Bold';
  color: var(--cl--black-100);
  letter-spacing: 1px;
  margin: var(--margin-xx-sm) var(--margin-7x-l);
`
const StyleUserLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  background-image: url(${UserImage});
  background-size: cover;
  background-position: center;
`
export { StylePageHeader, StyleContainerHeader, StyleWrapperLogo, StyleTitle, StyleUserLogo }

import styled from 'styled-components'
import UserImage from '../../assets/images/logo-users.png'

const StylePageHeader = styled.header`
  /* background-color: #ffdede;
  width: 20%;
  height: 100%;
  padding: 20px;
  left: 0px;
  top: 0px; */
  /* width: 300px; */
  /* width: 245px; */
  /* position: fixed; */
  /* display: none; */
`
const StyleContainerHeader = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`
const StyleWrapperLogo = styled.div`
  width: 300px;
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  margin: 22px 0 0 20px;
  position: fixed;
`
const StyleTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Roboto-Bold';
  color: var(--cl--black-100);
  letter-spacing: 1px;
  margin: 5px 70px;
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

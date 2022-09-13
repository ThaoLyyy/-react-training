import styled from 'styled-components'

const StyleModalWrapper = styled.section`
  background-color: var(--cl--gray-200);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 130vh;
`
const StyleOverlay = styled.div`
  font-family: 'Roboto-Regular';
  background: var(--cl--light-pink-200);
  position: absolute;
  inset: 0;
  width: 470px;
  height: 580px;
  z-index: 39;
  border-radius: 10px;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  line-height: 18px;
`
const StyleFormSubmit = styled.form`
  line-height: 4;
  margin: var(--margin) var(--margin-6x-l);
`
const StyleError = styled.p`
  color: var(--cl--red-200);
  line-height: 12px;
  font-size: var(--font-size-md);
`
const StyleTitle = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: var(--font-size-3xlg);
  text-transform: capitalize;
  line-height: 2;
  padding: var(--padding-x-sm);
`
const StyleLabel = styled.p`
  font-size: var(--font-size-md);
  line-height: 40px;
`
const StyleInputUser = styled.input`
  width: 338px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: var(--padding-xx-sm);
  font-size: var(--font-size-md);
`
const StyleBtnWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: var(--margin-5x-l);
`
const StyleButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-family: 'Roboto-Regular';
  font-size: var(--font-size-md);
  background-color: ${props => (props.backgroundColor ? 'var( --cl--light-blue-100)' : 'var( --cl--gray)')};
  &:hover {
    background: var(--cl--red-100);
  }
`

export {
  StyleModalWrapper,
  StyleOverlay,
  StyleTitle,
  StyleFormSubmit,
  StyleLabel,
  StyleInputUser,
  StyleError,
  StyleBtnWrapper,
  StyleButton
}

import styled from 'styled-components'

const StyleModalWrapper = styled.div`
  background-color: var(--cl--gray-200);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 130vh;
`
const StyleModal = styled.div`
  position: absolute;
  width: 700px;
  height: 285px;
  font-size: var(--font-size-3xlg);
  background: var(--cl--light-pink-200);
  z-index: 39;
  font-family: 'Roboto';
  border-radius: 10px;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
`
const StyleTitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: var(--font-size-4xlg);
  line-height: 3.5;
`
const StyleContent = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: var(--font-size-3xl);
`
const StyleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: var(--margin-2x-lg);
`
const StyleButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 46px;
  border: none;
  font-family: 'Roboto-Regular';
  font-size: var(--font-size-md);
  border-radius: 10px;
  margin: var(--margin-xx-sm);
  border-radius: 10px;
  background-color: ${props => (props.backgroundColor ? 'var(  --cl--red-200)' : 'var( --cl--gray)')};
`
export { StyleModalWrapper, StyleModal, StyleTitle, StyleContent, StyleButtonWrapper, StyleButton }

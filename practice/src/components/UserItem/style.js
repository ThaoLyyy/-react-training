import styled from 'styled-components'

const StyleListItem = styled.div`
  width: 1024px;
  margin: 35px auto 26px;
  padding: 0px;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`
const StyleItem = styled.div`
  display: flex;
  background: var(--cl--light-pink-100);
  border: 1px solid var(--cl--white);
  padding: 15px;
  border-radius: 10px;
`
const StyleImageWrapper = styled.div`
  display: flex;
  flex-direction: column; ;
`
const StyleImageItem = styled.img`
  width: 165px;
  height: 165px;
  object-fit: fill;
  padding: 15px;
`
const StyleInforItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  width: 270px;
`

const StyleDetailInfor = styled.p`
  font-size: var(--font-size-md);
  font-weight: 600;
  text-transform: capitalize;
  line-height: 3;
  width: 240px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const StyleIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const FontAwesomeIcon = styled.button`
  font-size: var(--font-size-2xlg);
  border: none;
  margin-top: 10px;
  cursor: pointer;
`
const Alert = styled.p``
export {
  StyleListItem,
  StyleItem,
  StyleImageWrapper,
  StyleImageItem,
  StyleInforItem,
  StyleDetailInfor,
  StyleIcon,
  FontAwesomeIcon,
  Alert
}

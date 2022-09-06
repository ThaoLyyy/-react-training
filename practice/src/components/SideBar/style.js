import styled from 'styled-components'

const StyleSideBarBackground = styled.aside`
  z-index: -1;
  min-height: 100wh;
  width: 25%;
  background: linear-gradient(to bottom, var(--cl--light-pink-primary) 20%, var(--cl--light-orange-100) 100%);
`
const StyleSideBarMenu = styled.div`
  font-size: var(--font-size-2xlg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
`
const StyleSideBarMenuPro = styled.ul`
  width: 100%;
  float: left;
  opacity: 1;
  list-style: none;
  margin: var(--margin);
  padding-left: var(--padding);
  margin-bottom: var(--margin);
  padding: var(--padding-md);
  border-radius: 0 60px 60px 0;
  color: var(--cl--white-100);
  background: linear-gradient(to right, var(--cl--light-orange-100) 0%, var(--cl--light-pink-500) 100%);
`
const StyleLeftSideBarMenuPr = styled.li`
  display: block;
  float: none;
  position: relative;
`

const StyleBtnIconHome = styled.i`
  /* display: block;
  float: none;
  position: relative; */
`
const StyleSideBarMenuHome = styled.span`
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  margin: var(--margin-x-sm);
`

export {
  StyleSideBarBackground,
  StyleSideBarMenu,
  StyleSideBarMenuPro,
  StyleLeftSideBarMenuPr,
  StyleSideBarMenuHome,
  StyleBtnIconHome
}

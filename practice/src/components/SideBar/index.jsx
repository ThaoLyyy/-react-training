import {
  StyleLeftSideBarMenuPr,
  StyleSideBarBackground,
  StyleSideBarMenu,
  StyleSideBarMenuHome,
  StyleSideBarMenuPro
} from './style'

const SideBar = () => {
  return (
    <StyleSideBarBackground>
      <StyleSideBarMenu>
        <StyleSideBarMenuPro>
          <StyleLeftSideBarMenuPr>
            <i className="fa big-icon fa-home"></i>
            <StyleSideBarMenuHome alt="IconHome">Home</StyleSideBarMenuHome>
          </StyleLeftSideBarMenuPr>
        </StyleSideBarMenuPro>
      </StyleSideBarMenu>
    </StyleSideBarBackground>
  )
}
export default SideBar

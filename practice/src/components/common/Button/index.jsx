import { StyleCommonButton } from './style'
import PropTypes from 'prop-types'

const Button = ({ onClicked, text, className, icon }) => {
  return (
    <>
      <StyleCommonButton onClick={onClicked} className={className}>
        {text} <i className={icon}></i>
      </StyleCommonButton>
    </>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  onClicked: PropTypes.func
}

export default Button

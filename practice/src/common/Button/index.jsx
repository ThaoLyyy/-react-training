import {CommonButton} from './style'
function Button ({icon, inputColor}) {
	return (
		<CommonButton inputColor={inputColor}>
			 <i className={icon}></i>
		</CommonButton>
	)
}

export default Button
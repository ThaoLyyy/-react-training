import {CommonButton} from './style'

const Button =  ({icon, inputColor}) =>{
	return (
		<CommonButton inputColor={inputColor}>
			 <i className={icon}></i>
		</CommonButton>
	)
}

export default Button
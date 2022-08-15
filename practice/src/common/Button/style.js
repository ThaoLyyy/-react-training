// import styled from 'styled-components'

// export const CommonButton = styled.button`
// 	&.add {
// 	position: absolute;
// 	width: 100px;
// 	height: 40px;
// 	top: 115px;
// 	right: 130px;
// 	font-size: 15px;
// 	cursor: pointer;
// 	background-color: #0066CC;
// 	color: #FFF;
// 	border: none;
// 	border-radius: 10px;
// }`

import styled from 'styled-components'


const CommonButton = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    background: bottom;
    border:none;
    cursor: pointer;
    font-size :22px;
    &.edit {
    margin-top: 10px;
    background: #DAE5D0;
    color:#A3A0C2;
    }
    &.delete {
    margin-top: 10px;
    color:#C36C1C;
    }
`
export {
    CommonButton,
}
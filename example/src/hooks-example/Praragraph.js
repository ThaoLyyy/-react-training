
 import { useContext } from "react";
 import { ThemeContext } from './ThemeContext'


 function Praragraph({}) {
    const context = useContext(ThemeContext)
  return (
    <p className={context.theme}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nostrum adipisci perspiciatis ipsam beatae explicabo libero! Placeat omnis excepturi eos ipsam qui fugit iure. Perspiciatis alias dolorum neque temporibus? Error?
    </p>
  )
}
export default Praragraph;

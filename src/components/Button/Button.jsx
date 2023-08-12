import Style from './style.module.css'
import P from 'prop-types'

const Button = (props) => {
  return <button className={Style.btn}>{props.children}</button>
}

Button.propTypes = {
  children: P.oneOfType([P.element, P.string])
}

export default Button

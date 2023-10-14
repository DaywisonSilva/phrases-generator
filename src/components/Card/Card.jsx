import Style from './style.module.css'
import P from 'prop-types'
import Icon from '../../assets/images/icon-dice.svg'

const Card = ({ advice, adviceId, onChange }) => {
  return (
    <div className={Style.card}>
      <p className={Style.frase}>frase #{adviceId}</p>
      <p className={Style.text}>&quot;{advice}&quot;</p>
      <img src={Icon} alt='Icon' className={Style.icon} onClick={onChange} />
    </div>
  )
}

Card.propTypes = {
  advice: P.string,
  adviceId: P.string,
  onChange: P.func
}

export default Card

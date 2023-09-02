import Style from './style.module.css'
import Icon from '../../assets/images/icon-dice.svg'

const Card = () => {
  return (
    <div className={Style.card}>
      <p className={Style.frase}>frase #1</p>
      <p className={Style.text}>
        &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium voluptatem rerum velit libero, sed voluptatum labore porro
        id.&quot;
      </p>
      <img src={Icon} alt='Icon' className={Style.icon} />
    </div>
  )
}

export default Card

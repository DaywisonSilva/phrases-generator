import Style from './style.module.css'

const Card = () => {
  return (
    <div className={Style.card}>
      <p className={Style.text}>
        &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium voluptatem rerum velit libero, sed voluptatum labore porro
        id.&quot;
      </p>
    </div>
  )
}

export default Card

import Style from './style.module.css'
import Icon from '../../assets/images/icon-dice.svg'
import { useState, useEffect } from 'react'

const Card = () => {
  const [advice, setAdvice] = useState(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Accusantium voluptatem rerum velit libero, sed voluptatum labore porroid.'
  )
  const [adviceId, setAdviceId] = useState(0)

  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setAdvice(data.slip.advice)
        setAdviceId(data.slip.id)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={Style.card}>
      <p className={Style.frase}>frase #{adviceId}</p>
      <p className={Style.text}>&quot;{advice}&quot;</p>
      <img src={Icon} alt='Icon' className={Style.icon} onClick={fetchData} />
    </div>
  )
}

export default Card

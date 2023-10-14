import './style/style.css'

import Card from './components/Card'
import { PacmanLoader } from 'react-spinners'
import { useEffect, useState } from 'react'

const App = () => {
  const [advice, setAdvice] = useState()
  const [adviceId, setAdviceId] = useState()
  const [loading, setLoading] = useState(true)
  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setAdvice(data.slip.advice)
        setAdviceId(String(data.slip.id))
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='container-card'>
        <PacmanLoader loading={loading} color='#52ffa8' />
        {loading ? null : <Card advice={advice} adviceId={adviceId} />}
      </div>
    </>
  )
}

export default App

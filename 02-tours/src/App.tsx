import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Tour from './models/Tour'
const url = 'https://course-api.com/react-tours-project'
const App: React.FC = () => {
  // States
  const [loading, setLoading] = useState<boolean>(false)
  const [tours, setTours] = useState<Tour[]>([])
  // Fetch Tours Function
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data: Tour[] = await response.json()
      setLoading(false)
      setTours(data)
    } catch (error) {
      return 'Error'
    }
  }
  // UseEffect
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  } else {
    return <div>data</div>
  }
}

export default App

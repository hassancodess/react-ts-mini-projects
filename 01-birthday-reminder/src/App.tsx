import { useState } from 'react'
import List from './List'
import data from './data'
import Reminder from './models/Reminder'

const App: React.FC = () => {
  const [people, setPeople] = useState<Reminder[]>(data)

  const handleClear = () => {
    setPeople([])
  }

  return (
    <>
      <div className='bg-pink-400 min-h-screen w-full flex items-center justify-center font-mono p-10'>
        <div className='p-8 bg-white rounded-lg flex flex-col space-y-10 w-2/5'>
          <h1 className='text-xl'>{people.length} Birthdays today</h1>
          <List people={people} />
          <button
            onClick={handleClear}
            className='py-2 px-10 text-white font-medium rounded-sm bg-gradient-to-r from-fuchsia-500 via-pink-500  to-pink-500'
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Cardsec from './components/Cardsec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex gap-x-2.5 justify-between'>
      <Sidebar />
      <Cardsec />
      </div>
    </>
  )
}

export default App

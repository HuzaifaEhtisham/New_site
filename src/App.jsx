import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h3 className='bg-green-600 p-4'>React router</h3>
    </>
  )
}

export default App

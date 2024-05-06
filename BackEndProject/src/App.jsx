import { useState } from 'react'
import './App.css'
import ContactForm from './ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactForm/>
    </>
  )
}

export default App

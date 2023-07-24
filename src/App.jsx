import { useState } from 'react'
import Booklist from './components/Booklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Book List</h1>
      <Booklist />
    </>
  )
}

export default App

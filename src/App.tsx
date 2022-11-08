import { useState } from 'react'
import './App.css'
import { Button } from '@fluentui/react-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button appearance="primary">Fluently yours</Button>
    </div>
  )
}

export default App

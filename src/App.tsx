
import './App.css'
import { Header } from './Header'
import { Finder } from './Finder'
import { ChatGPT } from './ChatGPT'
import { InitMap } from './Map'

function App() {

  return (
    <div className="App">
      <Header />
      <Finder />
      <InitMap />
      <ChatGPT />
    </div>
  )
}

export default App

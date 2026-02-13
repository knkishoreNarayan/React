import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>

      
      <Card user='Benki anko' age={21}/>
      <Card winner='Kishore' age={22}/>
      <Navbar/>
    </div>
  )
}

export default App

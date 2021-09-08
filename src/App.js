import './index.css'
import { Landing } from './pages/Landing'
import { Enjoy } from './pages/Enjoy'
import { Download } from './pages/Download'
const App = () => {
  return (
    <div className='app'>
      <Landing/>
      <Enjoy/>
      <Download/>
    </div>
  )
}

export default App


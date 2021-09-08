import './index.css'
import { Landing } from './pages/Landing'
import { Enjoy } from './pages/Enjoy'
import { Download } from './pages/Download'
import { Watch } from './pages/Watch'
import { Kids } from './pages/Kids'
const App = () => {
  return (
    <div className='app'>
      <Landing/>
      <Enjoy/>
      <Download/>
      <Watch />
      <Kids/>
    </div>
  )
}

export default App


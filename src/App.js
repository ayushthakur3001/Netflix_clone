import './index.css'
import { Landing } from './pages/Landing'
import { Enjoy } from './pages/Enjoy'
import { Download } from './pages/Download'
import { Watch } from './pages/Watch'
const App = () => {
  return (
    <div className='app'>
      <Landing/>
      <Enjoy/>
      <Download/>
      <Watch />
    </div>
  )
}

export default App


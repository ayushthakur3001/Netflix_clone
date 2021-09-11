import './index.css'
import { Landing } from './pages/Landing'
import { Enjoy } from './pages/Enjoy'
import { Download } from './pages/Download'
import { Watch } from './pages/Watch'
import { Kids } from './pages/Kids'
import { Faq } from './pages/FAQ'
import { Footer } from './pages/Footer'
const App = () => {
  return (
    <div className='app'>
      <Landing/>
      <Enjoy/>
      <Download/>
      <Watch />
      <Kids/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App


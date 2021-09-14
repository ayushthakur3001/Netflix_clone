import './index.css'
import { HomePage } from './pages/HomePage'
import { SignIn } from './pages/SignIn'
import { Route, Switch } from 'react-router'


const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signin' exact component ={SignIn} />
      </Switch>
    </div>
  )
}

export default App


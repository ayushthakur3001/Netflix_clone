import './style.scss'
import logo from "../../assets/logo.png"
import { Language } from '../Language'
export const Navbar = () => {
    
    return (
        <div className="navBar">
          <img src={logo} alt="..." />
          <div>
          <Language/>
          <button className='signIn'>Sign In</button>
          </div>
        </div>
    )
}



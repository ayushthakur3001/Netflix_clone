import './style.scss'
import logo from "../../assets/logo.png"
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';
export const Navbar = () => {
    const [lang, setLang] = useState('English')
    const [langOption, setLangOption] = useState(false)
    return (
        <div className="navBar">
          <img src={logo} alt="..." />
          <div>
          <div className='changeLang'>
          <button className='langButton' onClick={()=> setLangOption(!langOption)} >
            <LanguageIcon className='langIcon' fontSize='small'/>
              {lang}
            <ArrowDropDownIcon />
          </button>
        {
            langOption &&
            <div className='options'>
              <li 
              className={ langOption === 'English' ? 'active':'' }
              onClick={()=>{
                  setLang("English") 
                  setLangOption(false)
              }} 
              >English</li>
              <li 
              className={ langOption === 'हिंदी' ? 'active':'' }
              onClick={()=>{
                  setLang("हिंदी") 
                  setLangOption(false)
              }}
              >हिंदी</li>
          </div>
        }
          </div>
          <button className='signIn'>Sign In</button>
          
          </div>
        </div>
    )
}



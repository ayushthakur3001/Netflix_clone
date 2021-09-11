import './style.scss'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';
export const Language = () => {
    const [lang, setLang] = useState('English')
    const [langOption, setLangOption] = useState(false)
    return (
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
        
    )
}


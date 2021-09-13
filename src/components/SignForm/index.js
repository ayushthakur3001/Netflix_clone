import "./style.scss";
import { TextField } from "@material-ui/core";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useState } from "react";
export const SignForm = () => {
  const [error , setError] = useState(false);
  const [idError , setIdError] = useState('');
  const [idInput , setIdInput] = useState('');
  const [passwordError , setPasswordError] = useState('')
  const [passwordInput , setPasswordInput] = useState('');
  const [hidePass, setHidePass] = useState(false);
  const [showBlock , setShowBlock] = useState(false);
  
  const formSubmitHandler = (e)=>{
    e.preventDefault();
    checkIdError({idInput , setError, setIdError});
    checkPasswordError({passwordInput, })

  }
  return (
    <div className="signform">
    <img className='logoImg' src={logo} alt='logo' />
      <div className="form-container">
        <h1>Sign In</h1>
        <form onSubmit={formSubmitHandler} >
          <TextField
            variant="filled"
            label="Email or phone number"
            className={error ? "signfield error": 'signfield'}
            onChange={(e)=>{setIdInput(e.target.value)}}
            value={idInput}
            
          />
          <p>{idError}</p>
          <div className='password' >
          <TextField
            variant="filled"
            label="Password"
            type={hidePass ? "text": "password"}
            className="signfield"
            onChange={(e)=>{setPasswordInput(e.target.value)}}
            onFocus={()=>{setShowBlock(true)}}
            value={passwordInput}
          />
          {
            showBlock &&
            <div className='hide-pass' onClick={()=>{setHidePass(!hidePass)}} >
            <h4>{hidePass ? "Hide": 'Show'} </h4>
          </div>}
          <p>{passwordError}</p>
          </div>

          <button>Sign In</button>
        </form>
        <div className="checkbox">
          <div>
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <span className="helpText">Need Help?</span>
        </div>
        <div className="additional">
          <div className="fbLogin">
            <FacebookIcon className="fbIcon" color="primary" />
            <span>Login with Facebook</span>
          </div>
          <p>
            New to Netflix?
            <Link to='/' style={{ textDecoration: "none" }}>
              <p>Sign up now</p>
            </Link>
          </p>
          <span className="notbot">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<span>Learn More</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

const checkPasswordError = ({passwordInput , setError , setPasswordError})=>{

}


const checkIdError = ({idInput , setError , setIdError})=>{
  if(idInput.trim() === ''){
    setError(true);
    setIdError('Please enter a valid email address or phone number.');
  }
  else{
    if(idInput[0] >= 'a' && idInput[0] <= 'z'){
        if(idInput.includes('@') === false){
          setIdError('Please enter a valid email address.')
        }
        else if((idInput.length - idInput.indexOf('@')) <= 1){
          setIdError('Please enter a valid email address.')
        }
        else{
          setError(false)
          setIdError('')
        }
    }
    else if(idInput[0] >= 1 && idInput[0] <= 9){
      if(idInput.length !== 10){
        setIdError('Please enter a valid phone number.')
      }
      else{
        setIdError('');
        setError(false);
      }
    }
  }
}
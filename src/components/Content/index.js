import "./style.scss";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export const Content = () => {
  return (
    <div className="content">
      <p className="heading">Unlimited movies, TV shows and more.</p>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form>
      <div className='emailInput'>
      <input type='email' className='emailField' placeholder='Email address' />
      <button>
          Get Started
          <KeyboardArrowRightIcon/>
      </button>

      </div>

      </form>
      
        
        
    </div>
  );
};

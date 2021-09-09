import "./style.scss";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export const EmailInput = ({ extraClass }) => {
  return (
    <div className={extraClass ? "emailForm extraClass" : "emailForm"}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="emailInput">
        <form>
          <div className="emailInput">
            <input
              type="email"
              className="emailField"
              placeholder="Email address"
            />
            <button>
              Get Started
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

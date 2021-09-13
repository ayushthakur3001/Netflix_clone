import './style.scss'
import { Questions } from '../Questions'
import { EmailInput } from "../MembershipEmail";
export const Faq = () => {
    return (
        <div className='faq'>
            <p>Frequently Asked Questions</p>
            <Questions/>
            <EmailInput extraClass={true}/>
        </div>
    )
}


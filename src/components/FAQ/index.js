import './style.scss'
import { Questions } from '../../components/Questions'
import { EmailInput } from "../../components/MembershipEmail";
export const Faq = () => {
    return (
        <div className='faq'>
            <p>Frequently Asked Questions</p>
            <Questions/>
            <EmailInput extraClass={true}/>
        </div>
    )
}


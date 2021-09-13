import './style.scss'
import { Language } from '../Language'
const links = [
    ['FAQ', 'Help Centre', 'Terms of Use', 'Privacy', 'Cookie Preferences','Corporate Information' ]
]
const List = ({list})=>{
    return(
        <ul className='footer-ul'>
            {list.map((val)=>(
                <li className='footer-li'>{val}</li>
            ))}
        </ul>
            
    )
}
export const SignInFooter = () => {
    return (
        <div className='sign-footer'>
            <h5>Questions? <span>Call 000-800-040-1843</span></h5>
            <div>
            {
                links.map((list)=>(
                    <List list={list} />
                ))
            }
            </div>
            <div className='language'>
            <Language/>
            </div>
            
        </div>
    )
}

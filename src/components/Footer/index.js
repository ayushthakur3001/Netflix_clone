import "./style.scss";
import { Language } from "../Language";
const links = [
  ["FAQ", "Ways to Watch", "Cookie Preferences", "Speed Test"],

  [
    "Help Centre",
    "Investor Relations",
    "Corporate Information",
    "Legal Notices",
  ],

  ["Account", "Jobs", "Privacy", "Only on Netflix"],
  ["Media Centre", "Terms of Use", "Contact Us"],
];

const FooterList = ({ list }) => {
  return (
    <ul className="list">
      {list.map((li) => (
        <li className='footerList' key={Math.random()}>{li}</li>
      ))}
    </ul>
  );
};

export const Footer = () => { 
  return (
    <div className="footer">
      <h5>Questions? <span>Call 000-800-040-1843</span></h5>
      <div className="lists">
        {links.map((list) => (
          <FooterList key={Math.random()} list={list} />
        ))}
      </div>
      <div className='ending'>
      <Language  />
      <p>Netflix India</p>
      </div>
      
    </div>
  );
};

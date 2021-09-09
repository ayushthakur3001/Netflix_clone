import "./style.scss";
import { useState } from "react";
export const FaqItem = ({item , setClickId, clickId}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setClicked(!clicked);
          setClickId(item.id);
        }}
        className="faqs"
      >
      <p>{item.que}</p>
      <p className={clicked && clickId===item.id ? 'addIcon rotate' : 'addIcon'}>+</p>
      </div>
      {clicked && clickId===item.id  && <div className="answer">{item.ans}</div>}
    </>
  );
};

export default FaqItem;

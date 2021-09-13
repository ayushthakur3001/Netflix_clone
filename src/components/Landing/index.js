import "./style.scss";
import { Navbar } from "../Navbar";
import { Content } from "../Content";

export const Landing = () => {
  return (
    <div className="landing">
        <Navbar/>
        <Content/>
    </div>
  );
};

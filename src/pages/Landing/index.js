import "./style.scss";
import { Navbar } from "../../components/Navbar";
import { Content } from "../../components/Content";

export const Landing = () => {
  return (
    <div className="landing">
        <Navbar/>
        <Content/>
    </div>
  );
};

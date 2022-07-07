import logo from "../../assets/svg/Logo.svg";
import "./Logo.css";
const Logo = (props) => {
  return (
    <img className={props.size ? "big" : null} id="Logo" src={logo} alt="" />
  );
};
export default Logo;

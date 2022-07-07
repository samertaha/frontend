import logo from "../../assets/svg/roundLogo.svg";
import "./SpinningLogo.css";
const SpinningLogo = ({ spinningLogoClass }) => {
  return (
    <div id="sLogoDiv">
      <img className={`${spinningLogoClass}`} id="sLogo" src={logo} alt="" />
    </div>
  );
};
export default SpinningLogo;

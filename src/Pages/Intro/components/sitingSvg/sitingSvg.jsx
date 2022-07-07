import "./sitingSvg.css";
import sitingH from "../../../../assets/svg/sittingHebrew.svg";
import sitingA from "../../../../assets/svg/sittingArabic.svg";
const SitingSvg = (props) => {
  return <img id="siting" src={props.isArabic ? sitingA : sitingH} alt="" />;
};
export default SitingSvg;

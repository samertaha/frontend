import "./TurnPanel.css";
import Timer from "../Timer/Timer";
import Logo from "../../../../../styled-components/Logo/Logo";
const TurnPanel = (props) => {
  return (
    <div
      className={
        (props.isPlaying ? null : "notPlaying") +
        " " +
        (props.buttom ? "buttom" : null)
      }
      id="TurnPanel"
    >
      {/* <Timer /> */}
      <h1 className="sC">{props.buttom ? "دورك" : "תורך"}</h1>
      <Logo />
    </div>
  );
};
export default TurnPanel;

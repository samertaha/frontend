import { useState } from "react";
import "./CheckBox.css";
const CheckBox = (props, ref) => {
  const [check, setCheck] = useState(false);

  return (
    <div
      className={
        (check ? "on " : "off ") + " " + (props.isArabic ? "arabic" : null)
      }
      onClick={() => {
        setCheck(true);
        props.action(true);
      }}
      id="CheckBox"
    >
      <p>✔️</p>
    </div>
  );
};
export default CheckBox;

import "./ExplanationSlide.css";
import CheckBox from "../../styled-components/CheckBox/CheckBox";
import SpinningLogo from "../../styled-components/SpinningLogo/SpinningLogo";
import ExplanationText from "../../styled-components/ExplanationText/ExplanationText";
import { forwardRef } from "react";
const ExplanationSlide = forwardRef((props, ref) => {
  return (
    <div
      dir="rtl"
      ref={ref}
      id="ExplanationSlide"
      className={
        props.isEnd
          ? props.show
            ? "done"
            : "wait"
          : (props.isAbsulute ? "abs slide" : "rel slide") +
            " " +
            (props.hiden ? "hide" : null)
      }
    >
      <div className="content">
        <CheckBox isArabic={true} action={props.action1} />
        <ExplanationText isArabic={true} text={props.aText} />
        <ExplanationText text={props.hText} />
        <CheckBox action={props.action2} />
      </div>
      <SpinningLogo spinningLogoClass="spin" />
    </div>
  );
});
export default ExplanationSlide;

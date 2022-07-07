import "./ExplanationText.css";
const ExplanationText = (props) => {
  return (
    <div id="ExplanationText" className={props.isArabic ? "arabic sC" : "sC"}>
      {props.text}
    </div>
  );
};
export default ExplanationText;

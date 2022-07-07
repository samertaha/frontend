import "./TriviaQuestion.css";

const TriviaQuestion = ({ word, pronun, order, pos }) => {
  return (
    <div id="TriviaQuestion" className={pos} style={{ order: `${order}` }}>
      <div>
        <h3 className="sC">{word}</h3>
        <h1 className="pC">{pronun}</h1>
      </div>
    </div>
  );
};
export default TriviaQuestion;

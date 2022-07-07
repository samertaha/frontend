import { useEffect, useState } from "react";
import "./Message.css";

const Message = ({
  isCorrect,
  correctAnswer,
  wordInfo,
  setWordsIndex,
  setIsHebrewWord,
  setDisplayMessage,
  setClicked,
}) => {
  const [hebrewReady, setHebrewReady] = useState(false);
  const [arabicReady, setArabicReady] = useState(false);

  useEffect(() => {
    if (hebrewReady && arabicReady) {
      setWordsIndex((prev) => prev + 1);
      setIsHebrewWord((prev) => !prev);
      setDisplayMessage(false);
      setClicked(false);
    }
  }, [
    hebrewReady,
    arabicReady,
    setWordsIndex,
    setIsHebrewWord,
    setDisplayMessage,
    setClicked,
  ]);

  return (
    <div className="message-window">
      <div className="arabic-message arabic">
        <h1>{isCorrect ? "صحيح" : "غير صحيح"}</h1>
        <h3>كان الجواب {correctAnswer}</h3>
        <p>{wordInfo}</p>
        <button
          className={arabicReady ? "clicked" : ""}
          onClick={() => setArabicReady((prev) => !prev)}
        >
          السؤال التالي
        </button>
      </div>
      <div className="hebrew-message">
        <h1>{isCorrect ? "תשובה נכונה" : "תשובה לא נכונה"}</h1>
        <h3>התשובה הייתה {correctAnswer}</h3>
        <p>{wordInfo}</p>
        <button
          className={hebrewReady ? "clicked" : ""}
          onClick={() => setHebrewReady((prev) => !prev)}
        >
          לשאלה הבאה
        </button>
      </div>
    </div>
  );
};
export default Message;

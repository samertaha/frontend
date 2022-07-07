import "./Card.css";
import React, { useEffect, useState } from "react";

const Card = (props) => {
 


  return (
    <div
      className={props.isInactive ? "hidden" : ""}
      id="CardParent"
      onClick={() => {        
        props.onClick(props.index); 
      }}>
      {props.isFlipped ? (
        <div className="back ">
          <p className={props.isArabic ? `arabicCard` : null}>{props.text}</p>
        </div>
      ) : (
        <div className="front"></div>
      )}
    </div>

  );
};

export default Card;

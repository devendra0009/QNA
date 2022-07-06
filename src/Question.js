import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [read, setRead] = useState(false);
  // const plus=()=>{

  // }
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setRead(!read)
          }}>
          {read ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {read && <p>{info}</p>}
    </article>
  );
};

export default Question;
import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  // const [question,setQuestion]=useState(0)
  // const {id,title,info}=data[question];
  return (
    <main>
      <div className="container">
      <h3>Question and Answers</h3>
      <section className="info">
        {data.map((ques) => {
          return (
            <SingleQuestion
              key={ques.id}
              // title={ques.title}
              // info={ques.info}
              {...ques}
            />
          );
        })}
      </section>
      </div>
    </main>
  );
}

export default App;

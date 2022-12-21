import { useState } from "react";
import Question from "../components/Question/Question";
import AnswerModel from "../models/answerModel";
import QuestionModel from "../models/questionModel";

const questionMock = new QuestionModel(
  1,
  "Is it better color?",
  [
    AnswerModel.wrong("Green"),
    AnswerModel.wrong("Blue"),
    AnswerModel.wrong("Red"),
    AnswerModel.correct("Black"),
  ],
  true
);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  const onResponse = (index: number) => {
    setQuestion(question.answerWith(index));
    console.log(index);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Question question={question} onResponse={onResponse} />
    </div>
  );
}

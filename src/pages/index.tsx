import { useState } from "react";
import Button from "../components/Button/Button";
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

const Home = () => {
  const [question, setQuestion] = useState(questionMock);

  const onResponse = (index: number) => {
    setQuestion(question.answerWith(index));
  };

  const timeOver = () => {
    if (question.unanswered) {
      setQuestion(question.answerWith(-1));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Question
        question={question}
        onResponse={onResponse}
        timeOver={timeOver}
      />
      <Button text="Next" href="/result" />
    </div>
  );
};

export default Home;

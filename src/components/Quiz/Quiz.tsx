import styles from "../../styles/Quiz.module.css";

import { FC } from "react";
import QuestionModel from "../../models/question";
import Button from "../Button/Button";
import Question from "../Question/Question";

interface QuizProps {
  question: QuestionModel;
  lastOne: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  nextStep: () => void;
}

const Quiz: FC<QuizProps> = ({
  question,
  lastOne,
  answeredQuestion,
  nextStep,
}) => {
  const providedResponse = (index: number) => {
    if (question.unanswered) {
      answeredQuestion(question.answerWith(index));
    }
  };

  return (
    <div className={styles.quiz}>
      {question ? (
        <Question
          question={question}
          responseTime={10}
          providedResponse={providedResponse}
          timeOver={nextStep}
        />
      ) : (
        false
      )}
      <Button onClick={nextStep} text={lastOne ? "Finish" : "Next"} />
    </div>
  );
};

export default Quiz;

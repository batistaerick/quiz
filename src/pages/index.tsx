import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Quiz from "../components/Quiz/Quiz";
import QuestionModel from "../models/question";

const BASE_URL = "http://localhost:3000/api";

const Home = () => {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const gettingQuestionsIds = async () => {
    const response = await fetch(`${BASE_URL}/quiz`);
    setQuestionsIds(await response.json());
  };

  const buildQuestion = async (questionId: number) => {
    const response = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await response.json();
    setQuestion(QuestionModel.fromObject(json));
  };

  useEffect(() => {
    gettingQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && buildQuestion(questionsIds[0]);
  }, [questionsIds]);

  const answeredQuestion = (answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion);
    const gotItRight = answeredQuestion.gotItRight;
    setCorrectAnswers(correctAnswers + (gotItRight ? 1 : 0));
  };

  const nextQuestionId = () => {
    if (question) {
      const nextIndex = questionsIds.indexOf(question.id) + 1;
      return questionsIds[nextIndex];
    }
  };

  const goNextQuestion = (nextId: number) => {
    buildQuestion(nextId);
  };

  const finish = () => {
    router.push({
      pathname: "/result",
      query: {
        amount: questionsIds.length,
        corrects: correctAnswers,
      },
    });
  };

  const nextStep = () => {
    const nextId = nextQuestionId();
    nextId ? goNextQuestion(nextId) : finish();
  };

  return question ? (
    <Quiz
      question={question}
      lastOne={nextQuestionId() === undefined}
      answeredQuestion={answeredQuestion}
      nextStep={nextStep}
    />
  ) : (
    false
  );
};

export default Home;

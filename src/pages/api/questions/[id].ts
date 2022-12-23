import questions from "../questionsDataBase";

import type { NextApiRequest, NextApiResponse } from "next";

const questionHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id);

  const question = questions.filter((question) => question.id === id);

  if (question.length === 1) {
    const selectedQuestion = question[0].shuffleAnswers();
    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(204).send("ID not found!");
  }
};

export default questionHandler;

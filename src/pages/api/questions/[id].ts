import questions from "../questionsDataBase";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id);

  const question = questions.filter((question) => question.id === id);

  if (question) {
    const selectedQuestion = question[0]
      .shuffleAnswers()
      .answerWith(0)
      .toObject();
    res.status(200).json(selectedQuestion);
  } else {
    res.status(204).send("ID not found!");
  }
};

export default handler;

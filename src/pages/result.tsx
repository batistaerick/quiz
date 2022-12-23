import Button from "../components/Button/Button";
import Statistic from "../components/Statistic/Statistic";
import styles from "../styles/Result.module.css";

import { useRouter } from "next/router";

const Result = () => {
  const router = useRouter();

  const amount = Number(router.query.amount);
  const corrects = Number(router.query.corrects);
  const percent = Math.round((corrects / amount) * 100);

  return (
    <div className={styles.result}>
      <h1>Final Result</h1>
      <div style={{ display: "flex" }}>
        <Statistic text="Questions" value={amount} />
        <Statistic
          text="Right Answers"
          value={corrects}
          backgroundColor="#9CD2A4"
        />
        <Statistic
          text="Percent"
          value={`${percent}%`}
          backgroundColor="#DE6A33"
        />
      </div>
      <Button href="/" text="Try again!" />
    </div>
  );
};

export default Result;

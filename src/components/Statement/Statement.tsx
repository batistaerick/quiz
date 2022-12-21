import { FC } from "react";

import styles from "../../styles/Statement.module.css";

interface StatementProps {
  text: string;
}

const Statement: FC<StatementProps> = ({ text }) => {
  return (
    <div className={styles.statement}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Statement;

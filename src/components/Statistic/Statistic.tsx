import styles from "../../styles/Statistic.module.css";

import { FC } from "react";

interface StatisticProps {
  value: any;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

const Statistic: FC<StatisticProps> = ({
  value,
  text,
  backgroundColor,
  fontColor,
}) => {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor: backgroundColor ?? "#FDD60F",
          color: fontColor && "#333",
        }}
      >
        {value}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Statistic;

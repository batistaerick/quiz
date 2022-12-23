import { FC } from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../../styles/Timer.module.css";

interface TimerProps {
  key: any;
  duration: number;
  timeOver: () => void;
}

const Timer: FC<TimerProps> = ({ duration, timeOver }) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={duration}
        size={120}
        isPlaying
        onComplete={timeOver}
        colors={[
          ["#BCE596", 0.33],
          ["#F7B801", 0.33],
          ["#ED827A", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;

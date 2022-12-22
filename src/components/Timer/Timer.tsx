import { FC } from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../../styles/Timer.module.css";

interface TimerProps {
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
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[9, 6, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;

import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  // format the time to be 00:00
  const minsString = mins < 10 ? `0${mins}` : mins;
  const secondsString = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <div className="timer">{`${minsString}:${secondsString}`}</div>;
};

export default Timer;

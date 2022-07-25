import { differenceInSeconds } from "date-fns";
import { useEffect } from "react";
import { useCyclesContext } from "../../../../context/taskContext";
import { TimerSeparator, Timer } from "./styles";

export function Stopwatch() {
  const {
    amountSecondsPassed,
    handleSetCompletedCycles,
    onSetAmountSecondsPassed,
    activeCyCleId,
    cycles,
  } = useCyclesContext();

  const activeCycle = cycles.find((cycle) => cycle.id === activeCyCleId);

  const totalSeconds = activeCycle ? activeCycle.timer * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        );
        if (secondsDifference >= totalSeconds) {
          onSetAmountSecondsPassed(0);
          handleSetCompletedCycles();
        } else {
          onSetAmountSecondsPassed(secondsDifference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCyCleId,
    handleSetCompletedCycles,
    onSetAmountSecondsPassed,
  ]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `Pomodoro - ${minutes}:${seconds}`;
    } else {
      document.title = `Pomodoro`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <Timer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <TimerSeparator>:</TimerSeparator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </Timer>
  );
}

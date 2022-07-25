import { HandPalm, Play } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useCyclesContext } from "../../../../context/taskContext";
import { Stopwatch } from "../timer/index";

import {
  FormContainer,
  InputContainer,
  InputMinutesPerTask,
  InputTask,
  StartButton,
  StopButton,
} from "./styles";

type Cycles = {
  id: string;
  task: string;
  timer: number;
  startDate: Date;
  cycleInterrupted?: Date;
  completedCycle?: Date;
};
export function FormTimer() {
  const { handleSetCycles, handleCancelCycleActive, activeCyCleId } =
    useCyclesContext();
  const { register, watch, handleSubmit, reset } = useFormContext();

  const onHandleSubmit = handleSubmit(({ task, timer }) => {
    const newCycle = {
      id: String(new Date().getTime()),
      task,
      timer,
      startDate: new Date(),
    } as Cycles;
    handleSetCycles(newCycle);
    reset();
  });

  const task = watch("task");
  const isDisbleStartButon = !task;

  function onHandleCancelActiveCycle() {
    handleCancelCycleActive();
  }

  return (
    <FormContainer onSubmit={onHandleSubmit}>
      <InputContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <InputTask
          type="text"
          list="Projects"
          autoComplete="off"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCyCleId}
          {...register("task")}
        />

        <datalist id="Projects">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
        </datalist>
        <label htmlFor="minutesAmount">durante</label>
        <InputMinutesPerTask
          type="number"
          placeholder="00"
          step={0.1}
          min={0}
          max={60}
          disabled={!!activeCyCleId}
          {...register("timer", {
            valueAsNumber: true,
          })}
        />
        <span>minutos.</span>
      </InputContainer>
      <Stopwatch />
      {!activeCyCleId ? (
        <StartButton type="submit" disabled={isDisbleStartButon}>
          <Play size={24} />
          Começar
        </StartButton>
      ) : (
        <StopButton onClick={onHandleCancelActiveCycle} type="button">
          <HandPalm size={24} />
          Interromper
        </StopButton>
      )}
    </FormContainer>
  );
}

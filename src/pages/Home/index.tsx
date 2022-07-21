import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInSeconds } from "date-fns";

import { useEffect, useState } from "react";
import {
  FormContainer,
  HomeContainer,
  InputContainer,
  InputMinutesPerTask,
  InputTask,
  StartButton,
  Timer,
  TimerSeparator,
} from "./styles";

const CycleValitation = zod.object({
  task: zod.string().min(1, { message: "Por favor preencha o campo" }),
  timer: zod
    .number()
    .min(5, { message: "O tempo precisa ser de no mínimo 5 minutos" }),
});

type FormCycle = zod.infer<typeof CycleValitation>;

type Cycles = {
  id: string;
  task: string;
  timer: number;
  startDate: Date;
};

export function Home() {
  const [cycles, setCycles] = useState<Cycles[]>([]);
  const [activeCyCleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmoutSecondsPassed] = useState(0);

  const { register, watch, handleSubmit } = useForm<FormCycle>({
    resolver: zodResolver(CycleValitation),
    defaultValues: {
      task: "",
      timer: 5,
    },
  });

  const onHandleSubmit = handleSubmit(({ task, timer }) => {
    const newCycle = {
      id: String(new Date().getTime()),
      task,
      timer,
      startDate: new Date(),
    } as Cycles;
    setActiveCycleId(newCycle.id);

    setCycles((lastestCycles) => [...lastestCycles, newCycle]);
  });

  const activeCycle = cycles.find((cycle) => cycle.id === activeCyCleId);

  const totalSeconds = activeCycle ? activeCycle.timer * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  const task = watch("task");
  const isDisbleStartButon = !task;

  useEffect(() => {
    if (activeCycle) {
      document.title = `Pomodoro - ${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        setAmoutSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        );
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setAmoutSecondsPassed(0);
    };
  }, [activeCycle]);

  return (
    <HomeContainer>
      <FormContainer onSubmit={onHandleSubmit}>
        <InputContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            type="text"
            list="Projects"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="Projects">
            <option value="teste" />
            <option value="teste" />
            <option value="teste" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <InputMinutesPerTask
            type="number"
            placeholder="00"
            step={5}
            min={0}
            max={60}
            {...register("timer", {
              valueAsNumber: true,
            })}
          />
          <span>minutos.</span>
        </InputContainer>

        <Timer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <TimerSeparator>:</TimerSeparator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </Timer>

        <StartButton type="submit" disabled={isDisbleStartButon}>
          <Play size={24} />
          Começar
        </StartButton>
      </FormContainer>
    </HomeContainer>
  );
}

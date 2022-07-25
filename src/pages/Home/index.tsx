import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { HomeContainer } from "./styles";
import { FormTimer } from "./components/FormContainer";

const CycleValitation = zod.object({
  task: zod.string().min(1, { message: "Por favor preencha o campo" }),
  timer: zod
    .number()
    .min(1, { message: "O tempo precisa ser de no mínimo 5 minutos" }),
});

type FormCycle = zod.infer<typeof CycleValitation>;

export function Home() {
  const formMethods = useForm<FormCycle>({
    resolver: zodResolver(CycleValitation),
    defaultValues: {
      task: "",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <HomeContainer>
        <FormTimer />
      </HomeContainer>
    </FormProvider>
  );
}

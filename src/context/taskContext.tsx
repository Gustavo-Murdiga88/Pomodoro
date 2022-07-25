import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { differenceInSeconds } from "date-fns";
import { Cycles, CyclesReducer } from "../Reducers/cycles/Cycles";
import {
  AddNewCycle,
  CancelCycleActive,
  CompletedCycle,
} from "../Reducers/cycles/actions";

interface CyclesProviderProps {
  children: ReactNode;
}

interface CyclesContextProps {
  cycles: Cycles[];
  activeCyCleId: string | null;
  amountSecondsPassed: number;
  handleCancelCycleActive: () => void;
  handleSetCompletedCycles: () => void;
  handleSetCycles: (newCycle: Cycles) => void;
  onSetAmountSecondsPassed: (value: number) => void;
}

export const CyclesContext = createContext({} as CyclesContextProps);

export function CyclesContextProvider({ children }: CyclesProviderProps) {
  const [stateCycles, dispatch] = useReducer(
    CyclesReducer,
    {
      Cycles: [],
      activeCyCleId: null,
    },
    () => {
      const storedCyclesAsJson = localStorage.getItem(
        "@ignite-timer:cycles-1.0.0",
      );
      if (storedCyclesAsJson) {
        return JSON.parse(storedCyclesAsJson);
      }
      return {};
    },
  );

  const { Cycles: cycles, activeCyCleId } = stateCycles;

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (stateCycles.activeCyCleId) {
      const activeCycle = cycles.find((item) => item.id === activeCyCleId);
      return differenceInSeconds(new Date(), new Date(activeCycle?.startDate!));
    }
    return 0;
  });

  useEffect(() => {
    const cyclesValues = JSON.stringify(stateCycles);
    localStorage.setItem("@ignite-timer:cycles-1.0.0", cyclesValues);
  }, [stateCycles]);

  const handleSetCycles = useCallback((newCycle: Cycles) => {
    dispatch(AddNewCycle(newCycle));
  }, []);

  function handleCancelCycleActive() {
    dispatch(CancelCycleActive());
    setAmountSecondsPassed(0);
  }

  function handleSetCompletedCycles() {
    dispatch(CompletedCycle());
  }

  function onSetAmountSecondsPassed(value: number) {
    setAmountSecondsPassed(value);
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCyCleId,
        amountSecondsPassed,
        cycles,
        handleSetCycles,
        handleCancelCycleActive,
        handleSetCompletedCycles,
        onSetAmountSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}

export function useCyclesContext() {
  const context = useContext(CyclesContext);

  return context;
}

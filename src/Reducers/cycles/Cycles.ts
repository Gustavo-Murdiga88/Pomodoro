import { produce } from "immer";

import { ActionTypes } from "./actions";

export type Cycles = {
  id: string;
  task: string;
  timer: number;
  startDate: Date;
  cycleInterrupted?: Date;
  completedCycle?: Date;
};

interface CyclesStateProps {
  Cycles: Cycles[];
  activeCyCleId: string | null;
}

export function CyclesReducer(state: CyclesStateProps, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return produce(state, (draft) => {
        draft.Cycles.push(action.payload.newCycle);
        draft.activeCyCleId = action.payload.activeCyCleId;
      });
    }

    case ActionTypes.SET_COMPLETED_CYCLE: {
      const completedCycle = state.Cycles.findIndex(
        (item) => item.id === state.activeCyCleId,
      );
      if (!(completedCycle < 0)) {
        return produce(state, (draft) => {
          draft.Cycles[completedCycle].completedCycle = new Date();
          draft.activeCyCleId = action.payload.activeCycle;
        });
      }
      return state;
    }
    case ActionTypes.CANCEL_CYCLE_ACTIVE: {
      const fineshedCycle = state.Cycles.findIndex(
        (item) => item.id === state.activeCyCleId,
      );
      if (!(fineshedCycle < 0)) {
        return produce(state, (draft) => {
          draft.Cycles[fineshedCycle].cycleInterrupted = new Date();
          draft.activeCyCleId = action.payload.activeCycle;
        });
      }
      return state;
    }
    default:
      return state;
  }
}

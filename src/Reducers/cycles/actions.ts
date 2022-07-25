import { Cycles } from "./Cycles";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  SET_COMPLETED_CYCLE = "SET_COMPLETED_CYCLE",
  CANCEL_CYCLE_ACTIVE = "CANCEL_CYCLE_ACTIVE",
}

export function AddNewCycle(newCycle: Cycles) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
      activeCyCleId: newCycle.id,
    },
  };
}

export function CancelCycleActive() {
  return {
    type: ActionTypes.CANCEL_CYCLE_ACTIVE,
    payload: {
      activeCyCleId: null,
    },
  };
}

export function CompletedCycle() {
  return {
    type: ActionTypes.SET_COMPLETED_CYCLE,
    payload: {
      activeCyCleId: null,
    },
  };
}

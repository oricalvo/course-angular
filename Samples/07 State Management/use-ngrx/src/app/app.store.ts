export interface AppState {
  counter: number;
}

export function counterReducer(state: number, action): number {
  console.log("counterReducer", action);

  if(action.type == "DO_INC") {
    return state + 1;
  }
  else if(action.type == "DO_DEC") {
    return state - 1;
  }

  return state;
}


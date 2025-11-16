import cloneDeep from "lodash.clonedeep";
import {gameInit} from "./gameInit";

export function gameReducer(currentGameState, payload) {
  if (payload.action === "newGame") {
    return gameInit({...payload, seed: undefined, useSaved: false});
  } else if (payload.action === "todo handle other cases") {
    return {
      ...currentGameState,
    };
  } else {
    console.log(`unknown action: ${payload.action}`);
    return currentGameState;
  }
}

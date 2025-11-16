import {getRandomSeed} from "@skedwards88/shared-components/src/logic/getRandomSeed";
import {getSeedFromDate} from "@skedwards88/shared-components/src/logic/getSeedFromDate";

export function gameInit({useSaved = true, isDaily = false, seed}) {
  const savedStateName = isDaily
    ? "TODODailySavedStateName"
    : "TODOGameSavedStateName";

  if (isDaily) {
    seed = getSeedFromDate();
  }

  if (!seed) {
    seed = getRandomSeed();
  }

  const savedState = useSaved
    ? JSON.parse(localStorage.getItem(savedStateName))
    : undefined;

  if (
    savedState
    // todo enter other requirements for using saved state here
  ) {
    return savedState;
  }

  return {
    // todo return game state
  };
}

import React from "react";
import {handleShare} from "../common/handleShare";
import {isRunningStandalone} from "@skedwards88/shared-components/src/logic/isRunningStandalone";

// todo delete any unneeded controls
function ControlBar({
  dispatchGameState,
  gameState,
  setDisplay,
  dailyIsSolved,
  appName,
  shareText,
  url,
}) {
  return (
    <div id="controls">
      <button
        id="newGameButton"
        className="controlButton"
        onClick={() => {
          dispatchGameState({
            ...gameState,
            action: "newGame",
          });
        }}
      ></button>
      <button
        id="helpButton"
        className="controlButton"
        disabled={gameState.gameIsSolved}
        onClick={() => dispatchGameState({action: "getHint"})}
      ></button>
      <button
        id="settingsButton"
        className="controlButton"
        onClick={() => setDisplay("settings")}
      ></button>
      <button
        id="rulesButton"
        className="controlButton"
        onClick={() => setDisplay("rules")}
      ></button>
      <button
        id="heartButton"
        className="controlButton"
        onClick={() => setDisplay("heart")}
      ></button>
      {dailyIsSolved ? (
        <button
          id="calendarButtonSolved"
          className="controlButton"
          onClick={() => {
            dispatchGameState({action: "clearStreakIfNeeded"});
            setDisplay("daily");
          }}
        ></button>
      ) : (
        <button
          id="calendarButton"
          className="controlButton"
          onClick={() => setDisplay("daily")}
        ></button>
      )}

      {navigator.canShare ? (
        <button
          id="shareButton"
          onClick={() => {
            setDisplay("pause");
            handleShare({appName, text: shareText, url});

          }}
        ></button>
      ) : (
        <></>
      )}

      {!isRunningStandalone() ? (
        <button
          id="installButton"
          className="controlButton"
          onClick={() => setDisplay("installOverview")}
        ></button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ControlBar;

import { solution } from "./codes";

const gameStateKey = "gameState";

type StoredGameState = {
    guesses: string[];
    solution: string;
};

export const restartGameStateToLocalStorage = () => {
    localStorage.removeItem(gameStateKey);
    window.location.reload();
};

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
    localStorage.setItem(gameStateKey, JSON.stringify(gameState));
};

export const loadGameStateFromLocalStorage = () => {
    const state = localStorage.getItem(gameStateKey);
    return state
        ? (JSON.parse(state) as StoredGameState)
        : ({ guesses: [], solution } as StoredGameState);
};

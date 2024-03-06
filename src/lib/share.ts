import { getGuessStatuses } from "./statuses";
import { solutionIndex } from "./codes";

export const shareStatus = (guesses: string[]) => {
    navigator.clipboard.writeText(
        "Combination lock game " +
            solutionIndex +
            " " +
            guesses.length +
            "/6\n\n" +
            generateEmojiGrid(guesses)
    );
};

export const generateEmojiGrid = (guesses: string[]) => {
    return guesses
        .map(guess => {
            const status = getGuessStatuses(guess);
            return guess
                .split("")
                .map((letter, i) => {
                    switch (status[i]) {
                        case "correct":
                            return "🟩";
                        case "present":
                            return "🟨";
                        default:
                            return "⬜";
                    }
                })
                .join("");
        })
        .join("\n");
};

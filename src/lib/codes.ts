export const isValidCode = (code: string) => {
    return /^\d{5}$/.test(code);
};

export const isWinningCode = (code: string) => {
    return solution === code;
};

export const getNewCode = () => {
    const random = ("" + Math.random()).substring(2, 7);
    return {
        solution: random,
        solutionIndex: Number(random).toString(16)
    };
};

export const { solution, solutionIndex } = getNewCode();

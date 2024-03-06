import { KeyValue } from "../../lib/keyboard";
import { getStatuses } from "../../lib/statuses";
import { Key } from "./Key";
import { useEffect } from "react";

type Props = {
    // eslint-disable-next-line no-unused-vars
    onChar: (value: string) => void;
    onDelete: () => void;
    onEnter: () => void;
    guesses: string[];
};

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
    const charStatuses = getStatuses(guesses);

    const onClick = (value: KeyValue) => {
        if (value === "ENTER") {
            onEnter();
        } else if (value === "DELETE") {
            onDelete();
        } else {
            onChar(value);
        }
    };

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.code === "Enter") {
                onEnter();
            } else if (e.code === "Backspace") {
                onDelete();
            } else {
                const key = e.key.toUpperCase();
                if (key.length === 1 && key >= "0" && key <= "9") {
                    onChar(key);
                }
            }
        };
        window.addEventListener("keyup", listener);
        return () => {
            window.removeEventListener("keyup", listener);
        };
    }, [onEnter, onDelete, onChar]);

    return (
        <div>
            <div className="flex justify-center mb-1">
                <Key value="1" onClick={onClick} status={charStatuses["1"]} />
                <Key value="2" onClick={onClick} status={charStatuses["2"]} />
                <Key value="3" onClick={onClick} status={charStatuses["3"]} />
                <Key value="4" onClick={onClick} status={charStatuses["4"]} />
                <Key value="5" onClick={onClick} status={charStatuses["5"]} />
                <Key value="6" onClick={onClick} status={charStatuses["6"]} />
                <Key value="7" onClick={onClick} status={charStatuses["7"]} />
                <Key value="8" onClick={onClick} status={charStatuses["8"]} />
                <Key value="9" onClick={onClick} status={charStatuses["9"]} />
                <Key value="0" onClick={onClick} status={charStatuses["0"]} />
            </div>
            <div className="flex justify-center">
                <Key width={65.4} value="ENTER" onClick={onClick}>
                    Enter
                </Key>
                <Key width={65.4} value="DELETE" onClick={onClick}>
                    Delete
                </Key>
            </div>
        </div>
    );
};

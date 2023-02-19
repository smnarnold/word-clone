import React from 'react';
import { checkGuess } from '../../game-helpers';

export const Guess = ({ word, answer }) => {
    const wordArr = word.split('');
    const state = checkGuess(word, answer);

    return (
        <p className="guess">
            { 
                wordArr.map((letter, i) => {
                    let style = '';
                    if (letter !== ' ') style = state[i].status;

                    return <span className={`cell ${style}`} key={`${letter}-${i}`}>{letter}</span>
                })
            }
        </p>
    )
}
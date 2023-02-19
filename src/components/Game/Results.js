import React from 'react';
import { Guess } from './Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

export const Results = ({ guessesArr, answer }) => {
    const arr = [];

    for (let x = 0; x < NUM_OF_GUESSES_ALLOWED; x++) {
        arr.push('     ');
    }

    const newArr = [...guessesArr, ...arr];
    newArr.length = NUM_OF_GUESSES_ALLOWED;


    return (
        <div className="guess-results">
            { newArr.map((word, i) => <Guess key={`${word}-${i}`} word={word} answer={answer} />) }
        </div>
    )
}
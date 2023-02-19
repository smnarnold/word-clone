import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { Form } from './Form';
import { Results } from './Results';
import { WonBanner } from './WonBanner';
import { LostBanner } from './LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesArr, setGuessesArr] = React.useState([]);
  const [playerWon, setPlayerWon] = React.useState(false);
  const showSadBanner = playerWon === false && guessesArr.length === NUM_OF_GUESSES_ALLOWED;
  const isGameOver = playerWon || showSadBanner;
   
  const validateGuess = (guess) => {
    setPlayerWon(guess === answer);
    const nextGuessesArr = [...guessesArr, guess];
    setGuessesArr(nextGuessesArr);
  }

  return (
    <>
      { showSadBanner && <LostBanner answer={answer} /> }
      { playerWon && <WonBanner nbrOfGuesses={guessesArr.length} /> }
      <Results guessesArr={guessesArr} answer={answer} />
      <Form validateGuess={validateGuess} isGameOver={isGameOver} />
    </>
  );
}

export default Game;

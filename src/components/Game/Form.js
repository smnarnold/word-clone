import React from 'react';

export const Form = ({validateGuess, isGameOver}) => {
    const [enteredWord, setEnteredWord] = React.useState('');

  return (
    <form 
        onSubmit={e => {
            e.preventDefault();
            validateGuess(enteredWord);
            setEnteredWord('');
        }}
        className="guess-input-wrapper">
        <label 
            htmlFor="guess-input">Enter guess:</label>
        <input 
            id="guess-input"
            type="text"
            value={enteredWord}
            maxLength={5}
            minLength={5}
            pattern="[a-zA-Z]{5}"
            required
            disabled={isGameOver}
            onChange={e => setEnteredWord(e.target.value.toUpperCase())} />
    </form>
  )
}
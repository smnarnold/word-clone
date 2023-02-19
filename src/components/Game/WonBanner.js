import React from 'react';
import { Banner } from './Banner';

export const WonBanner = ({nbrOfGuesses}) => {
    return (
        <Banner status='happy'>
            <p>
                <strong>Congratulations!</strong> Got it in {' '}
                <strong>{nbrOfGuesses} {nbrOfGuesses === 1 ? 'guess' : 'guesses'}</strong>.
            </p>
        </Banner>
    )
}
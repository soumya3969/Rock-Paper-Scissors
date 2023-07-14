import React, { useState } from 'react';
import './RockPaperScissors.css';
const RockPaperScissors = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const [result, setResult] = useState('');

    const playGame = (userChoice) => {
        const computerChoice = choices[Math.random() * choices.length];
        let resultText = '';
        if (userChoice === computerChoice) {
            resultText = "It's a Tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultText = 'You Win!';
        } else {
            resultText = 'Computer Wins';
        }

        setResult(
            <>
                Your Choice: {userChoice}
                <br/>
                Computer's Choice: {computerChoice}
                <br/>
                {resultText}
            </>
        );
    };
    return(
        <div>
            <h1>Rock Paper Scissors</h1>
            <div className="game">
                <div className="choices">
                    <button className="choice" onClick={()=>playGame('rock')}>
                        <img src="" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

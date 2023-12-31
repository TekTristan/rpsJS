let playerCounter = 0;
                let computerCounter = 0;

                const message = document.querySelector('#message');
                const fMessage = document.querySelector('#fMessage');
                const tMessage = document.createElement('div');
                const t2Message = document.createElement('div');
                tMessage.id = 'tMessage';
                t2Message.id = 't2Message';

                const containerZero = document.querySelector('.containerZero');
                containerZero.id = 'containerZero';

                const fText = document.createElement('div');
                fText.classList.add('fText');
                const fText1 = document.createElement('h1');
                fText1.textContent = 'Rock Paper Scissors';
                const fText2 = document.createElement('h1');
                fText2.textContent = 'Choose your weapon!';

                const tryButt = document.createElement('button');
                const firstMessage = document.createElement('div');
                const secondMessage = document.createElement('div');
                const thirdMessage = document.createElement('div');
                const fourthMessage = document.createElement('button');
                firstMessage.id = 'firstMessage';
                secondMessage.id = 'secondMessage';
                thirdMessage.id = 'thirdMessage';
                fourthMessage.id = 'fourthMessage';
                containerZero.appendChild(firstMessage);
                containerZero.appendChild(secondMessage);
                containerZero.appendChild(thirdMessage);
                containerZero.appendChild(fourthMessage);
                firstMessage.textContent = 'A computer virus has taken the world hostage!';
                secondMessage.textContent = 'You have to play a game of Rock, Paper, Scissors to save humanity!';
                thirdMessage.textContent = 'Will you help?';
                fourthMessage.textContent = 'Start Game';

                const containerOne = document.querySelector('.containerOne');
                const containerTwo = document.querySelector('.containerTwo');
                const containerThree = document.querySelector('.containerThree');
                const containerFour = document.querySelector('.containerFour');
                const containerFive = document.querySelector('.containerFive');

                const boxHolder = document.createElement('div');
                boxHolder.classList.add('boxHolder');
                const rBox = document.createElement('div');
                rBox.classList.add('rbox');
                const imgR = document.createElement('img');
                imgR.src = 'images/rock.png';
                const pBox = document.createElement('div');
                pBox.classList.add('pbox');
                const imgP = document.createElement('img');
                imgP.src = 'images/paper.jpg';
                const sBox = document.createElement('div');
                sBox.classList.add('sbox');
                const imgS = document.createElement('img');
                imgS.src = 'images/scissors.png';

                const scoreHolder = document.createElement('div');
                scoreHolder.classList.add('scoreHolder');
                const pep = document.createElement('div');
                const pepH2 = document.createElement('h2');
                pepH2.textContent = 'Player Choice';
                pep.classList.add('pep');
                const playerScore = document.createElement('div');
                playerScore.id = 'pScore';
                const comp = document.createElement('div');
                const compH2 = document.createElement('h2');
                compH2.textContent = 'Computer Choice';
                comp.classList.add('comp');
                const computerScore = document.createElement('div');
                computerScore.id = 'cScore';

        fourthMessage.addEventListener('click', () => {
                containerZero.remove();
                containerOne.appendChild(fText);
                fText.appendChild(fText1);
                fText.appendChild(fText2);
                containerTwo.appendChild(boxHolder);
                boxHolder.appendChild(rBox);
                rBox.appendChild(imgR);
                boxHolder.appendChild(pBox);
                pBox.appendChild(imgP);
                boxHolder.appendChild(sBox);
                sBox.appendChild(imgS);
                containerThree.appendChild(scoreHolder);
                scoreHolder.appendChild(pep);
                pep.appendChild(pepH2);
                pep.appendChild(playerScore);
                scoreHolder.appendChild(comp);
                comp.appendChild(compH2);
                comp.appendChild(computerScore);
                getPlayerChoice();
        });

                playerScore.textContent = playerCounter;
                computerScore.textContent = computerCounter;

        getComputerChoice = () => {
            const getChoice = ['rock', 'paper', 'scissors'];
                const randomNumber = Math.floor(Math.random() * 3);

                return getChoice[randomNumber];
        };

        getPlayerChoice = () => {
            const rock = document.querySelector('.rbox');
                const paper = document.querySelector('.pbox');
                const scissors = document.querySelector('.sbox');

            rock.addEventListener('click', () => {
                    playGame('rock');
            });
            paper.addEventListener('click', () => {
                    playGame('paper');
            });
            scissors.addEventListener('click', () => {
                    playGame('scissors');
            });
        };

        playGame = (playerSelection) => {
                let computerSelection = getComputerChoice();

                if (playerCounter < 5 && computerCounter < 5) {
                if (playerSelection === computerSelection) {
                    message.textContent = "Stop copying the virus!";
                } else if (playerSelection === 'rock') {
                    if (computerSelection === 'paper') {
                    computerCounter += 1;
                computerScore.textContent = computerCounter;
                message.textContent = 'You lose! Paper beats Rock';
                    } else {
                    playerCounter += 1;
                playerScore.textContent = playerCounter;
                message.textContent = 'You win! Rock beats Scissors';
                    }
                } else if (playerSelection === 'paper') {
                    if (computerSelection === 'scissors') {
                    computerCounter += 1;
                computerScore.textContent = computerCounter;
                message.textContent = 'You lose! Scissors beats Paper';
                    } else {
                    playerCounter += 1;
                playerScore.textContent = playerCounter;
                message.textContent = 'You win! Paper beats Rock';
                    }
                } else if (playerSelection === 'scissors') {
                    if (computerSelection === 'rock') {
                    computerCounter += 1;
                computerScore.textContent = computerCounter;
                message.textContent = 'You lose! Rock beats Scissors';
                    } else {
                    playerCounter += 1;
                playerScore.textContent = playerCounter;
                message.textContent = 'You win! Scissors beats Paper';
                    }
                }
            }

                if (playerCounter === 5) {
                    fMessage.appendChild(tMessage);

                tMessage.textContent = 'Humanity has been saved!';
                tMessage.appendChild(tryButt);
                tryButt.textContent = 'Play Again';
        } else if (computerCounter === 5) {
                    fMessage.appendChild(t2Message);
                t2Message.textContent = 'Humanity has fallen....';
                t2Message.appendChild(tryButt);
                tryButt.textContent = 'Try Again';
        }
        }
    
    tryButt.addEventListener ('click', () => {
                playerCounter = 0;
                computerCounter = 0;
                playerScore.textContent = playerCounter;
                computerScore.textContent = computerCounter;
                message.textContent = '';
                fMessage.textContent = '';
                fMessage.removeChild(tryButt);
                fMessage.removeChild(tMessage);
                fMessage.removeChild(t2Message);
    })



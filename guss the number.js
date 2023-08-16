let secretNumber = Math.trunc((Math.random() * 20) +1);
let score = 20;
let highScore = 0;

document.querySelector('.submit-btn').addEventListener('click', function(){
    let userGuessed = document.querySelector('.number').value;
    if(score >= 2){
        if (!userGuessed){


            //if user doesn't input any number
            document.querySelector('.message').textContent = 'No Number!';
        }else if(userGuessed > secretNumber){

            //if user input a higher number
            document.querySelector('.message').textContent = 'high number!';
            score--;
            document.querySelector('.score-num').textContent = score;
        }else if(userGuessed < secretNumber){


            //if user input a lower number
            document.querySelector('.message').textContent = 'low Number!';
            score--;
            document.querySelector('.score-num').textContent = score;
        }else{

            //when user guessed the correct number
            document.querySelector('.message').textContent = 'currect answer!';

            //visible the secret number that be guessed
            document.querySelector('.secret-number').textContent = secretNumber;

            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore-value').textContent = highScore;
                console.log(highScore);
            }

            //style of correct answer
            document.querySelector('html').style.backgroundColor = '#249029';
            document.querySelector('.secret-number-container').style.width = '12rem';
        }
    }else{
        document.querySelector('.message').textContent = 'you lost the game!';
        document.querySelector('.score-num').textContent = 0;
    }
})



//start the game again
document.querySelector('.again-btn').addEventListener('click', function(){
    //reset the secret number
    secretNumber = Math.trunc((Math.random() * 20) +1);


    //reset the score
    score = 20;

    //reset the message
    document.querySelector('.message').textContent = 'start guessing...';

    //hide the secret number content
    document.querySelector('.secret-number').textContent = '?';

    //empty the input
    document.querySelector('.number').value = '';

    //reset the styles
    document.querySelector('html').style.backgroundColor = 'rgb(88, 88, 87)';
    document.querySelector('.secret-number-container').style.width = '8rem';
})



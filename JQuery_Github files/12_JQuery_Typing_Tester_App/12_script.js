// Get all the HTML Elements
let clapSound = $('#clap');
let congratsSound = $('#congrats');
let originalTextElement = $('#original-text');
let textArea = $('#text-area');
let messageCard = $('#message-card');
let message = $('#message');
let resetButton = $('#reset-button');
let minutesElement = $('#minutes');
let secondsElement = $('#seconds');
let milliSecondsElement = $('#m-seconds');
const textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

let timerRunning = false;
let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;

// Keyup event for TextArea
textArea.keyup(function() {
    let textEnteredLength = textArea.val().length;
    let textEntered = textArea.val();
    let originalText = originalTextElement.text();
    let partialText = originalText.substr(0,textEnteredLength);
    callTimer(textEnteredLength);
    evaluateText(textEntered,originalText,partialText);
});

// Click on Reset Button
resetButton.click(function() {
    clearInterval(interval);
    resetVariables();
    messageCard.removeClass('bg-success').removeClass('bg-danger')
        .removeClass('bg-primary').addClass('bg-light');
    message.text('');
    textArea.val('');
    milliSecondsElement.text('00');
    secondsElement.text('00');
    minutesElement.text('00');
    generateRandomText();
});


// Call Timer
let callTimer = (textEnteredLength) => {
    if(textEnteredLength === 1 && !timerRunning){
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
};

// start Timer
let startTimer = () => {
    timer++;
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));
};

// Leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// Evaluate Text
let evaluateText = (textEntered,originalText,partialText) => {
    if(textEntered === ''){
        //gray
        messageCard.removeClass('bg-success').removeClass('bg-danger')
                   .removeClass('bg-primary').addClass('bg-light');
        message.text('');
    }
    else{
        if(textEntered === originalText){
            // green
            messageCard.removeClass('bg-light').removeClass('bg-danger')
                .removeClass('bg-primary').addClass('bg-success');
            message.text('Congratulation');
            // stop Timer
            clearInterval(interval);
            congratsSound.trigger('play')
        }
        else{
            if(textEntered === partialText){
                // blue
                messageCard.removeClass('bg-success').removeClass('bg-danger')
                    .removeClass('bg-light').addClass('bg-primary');
                message.text('Correct!');
            }
            else{
                // red
                messageCard.removeClass('bg-success').removeClass('bg-light')
                    .removeClass('bg-primary').addClass('bg-danger');
                message.text('Wrong!');
                clapSound.trigger('play')
            }
        }
    }
};

// Reset Variables
let resetVariables = () => {
    timerRunning = false;
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
};

// Generate Random Text
let generateRandomText = () => {
    let randomIndex = Math.round(Math.random() * 10);
    let randomString = textArray[randomIndex];
    originalTextElement.text(randomString.trim());
};
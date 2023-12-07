// References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let difficultyPicker = document.getElementById("difficulty-picker");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let difficultySelector = document.getElementById("difficulty");

// Questions and Options array for each difficulty
const difficulties = {
    easy: [
        { id: "0", question: "Hello", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option A" },
        { id: "1", question: "Uwu", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
        { id: "2", question: "Yo yo yo yo yo yo", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
        { id: "3", question: "Ako na lang please", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option D" },
        { id: "4", question: "Eme", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option A" },
        { id: "5", question: "pwet ni aaron malambot", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
        { id: "6", question: "Yancy", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
        { id: "7", question: "Pakakabum", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option D" },
        { id: "8", question: "Eddie Cruz", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option A" },
        { id: "9", question: "Kort", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
    ],
    medium: [
        { id: "0", question: "Medium Question 1?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
        { id: "1", question: "Medium Question 2?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
        { id: "2", question: "Medium Question 3?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option D" },
        { id: "3", question: "Medium Question 4?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option A" },
        { id: "4", question: "Medium Question 5?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
        { id: "5", question: "Medium Question 6?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
        { id: "6", question: "Medium Question 7?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option D" },
        { id: "7", question: "Medium Question 8?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option A" },
        { id: "8", question: "Medium Question 9?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
        { id: "9", question: "Medium Question 10?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
    ],
    hard: [
        { id: "0", question: "Hard Question 1?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
        { id: "1", question: "Hard Question 2?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option D" },
        { id: "2", question: "Hard Question 3?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option A" },
        { id: "3", question: "Hard Question 4?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
        { id: "4", question: "Hard Question 5?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
        { id: "5", question: "Hard Question 6?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option D" },
        { id: "6", question: "Hard Question 7?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option A" },
        { id: "7", question: "Hard Question 8?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option B" },
        { id: "8", question: "Hard Question 9?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option C" },
        { id: "9", question: "Hard Question 10?", options: ["Option A", "Option B", "Option C", "Option D"], correct: "Option D" },
    ],
};
// Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

 nextBtn.addEventListener("click", () => {
    questionCount += 1;
    if (questionCount == difficulties[difficultySelector.value].length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;
    } else {
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + difficulties[difficultySelector.value].length + " Question";
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
});


// Timer
// Timer
const timerDisplay = () => {
    count = 15; // Reset the count to 11 before starting the timer
    timeLeft.innerHTML = `${count}s`;

    clearInterval(countdown); // Clear any existing interval

    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count <= 0) {
            clearInterval(countdown);
            setTimeout(() => nextBtn.click(), 1000); // Simulate click on the next button after a brief delay
        }
    }, 1000); // Set the interval duration to 1000ms (1 second)
};


// Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

// Checker Function
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === difficulties[difficultySelector.value][questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == difficulties[difficultySelector.value][questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

// Quiz Creator
function quizCreator(difficulty) {
    difficulties[difficulty].sort(() => Math.random() - 0.5);
    for (let i of difficulties[difficulty]) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        countOfQuestion.innerHTML = 1 + " of " + difficulties[difficulty].length + " Question";
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        div.innerHTML += `
            <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
        quizContainer.appendChild(div);
    }
}

// Initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator(difficultySelector.value);
    quizDisplay(questionCount);
}

// When user selects a difficulty level
difficultySelector.addEventListener("change", () => {
    initial();
});

// Start Button Click
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

// Window onload
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
// Difficulty Picker
const showDifficultyPicker = () => {
    startScreen.classList.add("hide");
    difficultyPicker.classList.remove("hide");
};

// Start Button Click
startButton.addEventListener("click", () => {
    showDifficultyPicker();
});

// Additional script to hide timer when difficulty is not selected
const hideTimer = () => {
    document.querySelector(".timer-div").classList.add("hide");
};

const showTimer = () => {
    document.querySelector(".timer-div").style.display = "flex"; // Show the timer
};
// Difficulty Selection
const selectDifficulty = () => {
    difficultyPicker.classList.add("hide");
    displayContainer.classList.remove("hide");
    document.getElementById("container").classList.remove("hide"); // Show the quiz container
    document.getElementById("next-button").classList.remove("hide"); // Show the Next button
    hideTimer(); // Hide the timer when difficulty is selected
    initial();
    showTimer(); // Show the timer when difficulty is selected
    timerDisplay(); // Start the timer when difficulty is selected
};

// Difficulty Selector Click
document.getElementById("select-difficulty-button").addEventListener("click", () => {
    selectDifficulty();
});

// Window onload
window.onload = () => {
    startScreen.classList.remove("hide");
    difficultyPicker.classList.add("hide");
    displayContainer.classList.add("hide");
    hideTimer(); // Hide the timer initially
};
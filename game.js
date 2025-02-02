let msg = document.getElementById("msg");
let img1 = document.getElementById("choice1");
let img2 = document.getElementById("choice2");
let question = document.getElementById("question");
let percent = document.getElementById("percent");

let images = [
    { 
        question: "Which one is the spyhnx cat?", 
        correct: "./image/cat1.png", 
        wrong: "./image/cat2.jpg",
        percent: "0%"
    },
    { 
        question: "Which one is mint condition?", 
        correct: "./image/band1.jpg", 
        wrong: "./image/band2.jpg",
        percent: "60%"
    },
    { 
        question: "Which one is the mazda rx-7?", 
        correct: "./image/car1.jpg", 
        wrong: "./image/car2.jpg",
        percent: "100%"
    }
];

let currentIndex = 0;
let correctImg = "";

function updateGame() {
    let currentSet = images[currentIndex];

    question.textContent = currentSet.question;
    percent.textContent = currentSet.percent;
    if (Math.random() < 0.5) {
        img1.src = currentSet.correct;
        img2.src = currentSet.wrong;
        correctImg = img1.src;
    } else {
        img1.src = currentSet.wrong;
        img2.src = currentSet.correct;
        correctImg = img2.src;
    }
}

function checkAnswer(selectedImg) {
    if (selectedImg === correctImg) {
        msg.textContent = "Correct!";
        msg.style.color = "green";
        currentIndex++;

        if (currentIndex >= images.length) {
            setTimeout(() => {
                window.location.href = "kenshie.html"; 
            }, 1000);
        } else {
            setTimeout(updateGame, 1000);
        }
    } else {
        msg.textContent = "Wrong!";
        msg.style.color = "red";
    }
}

img1.addEventListener("click", () => checkAnswer(img1.src));
img2.addEventListener("click", () => checkAnswer(img2.src));

updateGame();
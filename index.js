const questions = [
    {
        question: "What is the name of Luffy's ship?",
        answer: "Thousand Sunny",
        options: ["Thousand Sunny", "Titanic", "Black Pearl"]
    },
    {
        question: "Who is the navigator of the Straw Hat Pirates?",
        answer: "Nami",
        options: ["Zoro", "Sanji", "Nami"]
    },
    {
        question: "What is the name of the treasure that every pirate is searching for?",
        answer: "One Piece",
        options: ["One Piece", "Pirate's Gold", "Ocean's Jewel"]
    },
    {
        question: "Who ate the Gomu Gomu no Mi fruit?",
        answer: "Luffy",
        options: ["Sanji", "Luffy", "Usopp"]
    },
    {
        question: "What type of Devil Fruit does Tony Tony Chopper have?",
        answer: "Zoan",
        options: ["Logia", "Paramecia", "Zoan"]
    },
    {
        question: "What is the main goal of Monkey D. Luffy?",
        answer: "To become the Pirate King",
        options: ["To find the best chef in the world", "To become the Pirate King", "To collect all Devil Fruits"]
    },
    {
        question: "Who is the first mate of the Straw Hat Pirates?",
        answer: "Zoro",
        options: ["Usopp", "Zoro", "Brook"]
    },
    {
        question: "What is the name of Sanji's fighting style?",
        answer: "Black Leg Style",
        options: ["Three-Sword Style", "Black Leg Style", "Fish-Man Karate"]
    },
    {
        question: "Which island is known as the starting point of the Grand Line?",
        answer: "Reverse Mountain",
        options: ["Fish-Man Island", "Thriller Bark", "Reverse Mountain"]
    }
]

let displayedQuestion = document.getElementById("question")
const questionField1 = document.getElementById("field1")
const questionField2 = document.getElementById("field2")
const questionField3 = document.getElementById("field3")
const questionField4 = document.getElementById("field4")
const questionField5 = document.getElementById("field5")
const questionField6 = document.getElementById("field6")
const questionField7 = document.getElementById("field7")
const questionField8 = document.getElementById("field8")
const questionField9 = document.getElementById("field9")
const questionFields = [
    questionField1, questionField2, questionField3,
    questionField4, questionField5, questionField6,
    questionField7, questionField8, questionField9
]
let questionIndex = 0

let visitedIsland = {
    field0: false,
    field1: false,
    field2: false,
    field3: false,
    field4: false,
    field5: false,
    field6: false,
    field7: false,
    field8: false
}


function showQuestion() {
    const currentQuestion = questions[questionIndex]
    if (questionIndex < questions.length) {

        displayedQuestion.innerText = currentQuestion.question

        document.querySelector('label[for="option1"]').innerText = currentQuestion.options[0];
        document.querySelector('label[for="option2"]').innerText = currentQuestion.options[1];
        document.querySelector('label[for="option3"]').innerText = currentQuestion.options[2];
        document.getElementById("option1").value = currentQuestion.options[0];
        document.getElementById("option2").value = currentQuestion.options[1];
        document.getElementById("option3").value = currentQuestion.options[2];

    } else {
        displayedQuestion.innerText = "Congratulation, you answered all questions. Let´s go for the One Piece"
    }
}

function logAnswer() {
    const currentQuestion = questions[questionIndex]
    let selectedOption = document.querySelector('input[name="answer"]:checked').value
    if(selectedOption === currentQuestion.answer) {
        visitedIsland['field' + questionIndex] = true
        changeImg()

        questionIndex++
        showQuestion()
    } else alert("Wrong Answer!")
}

function changeImg() {
    let imgId = 'field' + (questionIndex+1)
    let imgElement = document.getElementById(imgId)
    if (imgElement && imgElement.src !== 'pictures/islandWin.png') {
        imgElement.src = 'pictures/islandWin.png'
    }
}

questionFields.forEach((field, index) => {
    field.addEventListener('click', () => {
        if (visitedIsland['field' + index]) {
            questionIndex = index;
            showQuestion();
        } else {
            alert("You haven't unlocked this island yet!");
        }
    })
})

showQuestion()
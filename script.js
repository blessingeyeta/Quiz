const questions = [
    {
        question: "Which is the largest Animal in the World?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the Smallest Country in the World?",
        answers: [
            { text: "Australia", correct: true},
            { text: "Africa", correct: false},
            { text: "Asia", correct: false},
            { text: "Asgardifan", correct: false},
        ]
    },
    {
        question: "Which is the largest Desert in the World?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gori", correct: true},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: false},
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
const myAnswer = document.getElementById("answer_buttons");

// const questionElement = document.getElementById("question");
// questionElement.textContent = questions[currentQuestionIndex].answers.length;
function loadQues(){
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;

    const choicedv = document.createElement("div");
    choicedv.id = "answer_div";
    for (i = 0; i<questions[currentQuestionIndex].answers.length; i++){
        
        const choicediv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
		choice.name = "answer";
        choice.value = i;
        choice.className = "answers";
        choicediv.className = "answer_div";
		choiceLabel.textContent = questions[currentQuestionIndex].answers[i].text;

        choicediv.appendChild(choice);
        choicediv.appendChild(choiceLabel);
        choicedv.appendChild(choicediv);
       myAnswer.appendChild(choicedv);
    }
}

loadQues();
// const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
// alert(questions[currentQuestionIndex].answers[selectedAns].correct);

function nextQuestion(){

    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
   
    if (questions[currentQuestionIndex].answers[selectedAns].correct == true){
        score++;
    }

    currentQuestionIndex++;
    const cho = document.getElementById('answer_div');
    cho.remove();

    if (currentQuestionIndex < questions.length ){
        loadQues();    
    }
    else{
        document.getElementById("next-btn").remove();

        const finalScore = "You scored " + score + " out of " + questions.length;
        const questionElement = document.getElementById("question");
        questionElement.textContent = finalScore;
    
        const button = document.createElement("button")
         
        button.name = "Restart";
        button.textContent ="Restart"; 
        button.id = "next-button";
        document.getElementById("button").appendChild(button);
    }

    document.getElementById("next-button").addEventListener("click", reload);

    function reload(){
        window.location.reload();
    }
    
}


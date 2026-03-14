//URL topic and no. og questions
const params = new URLSearchParams(window.location.search);

const topic = params.get("topic");
const count = params.get("count");


console.log(topic, count);


//Questions
const Questions = [
    {
        question: "Time complexity of Binary Search?",
        options: [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(1)"
        ],
        answer: "O(log n)"
    },
    {
        question: "Which data structure uses FIFO?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: "Queue"
    },
    {
        question: "Which data structure uses LIFO?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: "Stack"
    },
];

//Questions
const container = document.getElementById("questionContainer");

let score = 0;
let currentQuestion = 0;

function renderQuestion(){
      if(currentQuestion >= count){
        container.innerHTML = `
        <h2>Quiz Completed</h2>
        <h3>Your Score: ${score} / ${count}</h3>
        `;
        return;
    }

      const q = Questions[currentQuestion];

    container.innerHTML = `
        <div class="quesCard">

        <h3>Q.${currentQuestion+1} ${q.question}</h3>

        ${q.options.map(opt => `
            <label>
                <input type="radio" name="answer" value="${opt}">
                ${opt}
            </label><br>
        `).join("")}

        <button id="qbtn">Submit</button>

        </div>
    `;

    document.getElementById("qbtn").addEventListener("click", checkAnswer);
}

function checkAnswer(){

    const selected = document.querySelector('input[name="answer"]:checked');

    if(!selected){
        alert("Please select an option");
        return;
    }

    if(selected.value === Questions[currentQuestion].answer){
        score++;
    }

    const card = document.querySelector(".quesCard");
    card.classList.add("flip");

    setTimeout(() => {
        currentQuestion++;
        renderQuestion();
    }, 600); 
}

renderQuestion();
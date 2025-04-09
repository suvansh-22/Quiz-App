document.addEventListener('DOMContentLoaded',()=>{
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("ques");
    const choicesList = document.getElementById("option");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const cont = document.getElementById("main");



    const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          choices: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain",
          ],
          answer: "William Shakespeare",
        },
      ];
      let currentQuestion = 0;
      let score = 0;

      startBtn.addEventListener('click',startquiz)

      nextBtn.addEventListener('click',nextquestion)

      restartBtn.addEventListener('click',restartQuiz)

      function startquiz(){
        startBtn.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        cont.style.width = "500px"
        showquestion()
      }

      let answer;
      let selectedanswer;

      function showquestion(){
        nextBtn.classList.add("hidden");
        questionText.innerHTML = questions[currentQuestion].question;
        questions[currentQuestion].choices.forEach((choice)=>{
            const li = document.createElement("li")
            li.innerHTML = choice;
            li.addEventListener('click',()=> selectanswer(choice , li))
            choicesList.append(li)
        })
      }

      function selectanswer(choice , selectedLi){
        Array.from(choicesList.children).forEach(li => {
            li.style.backgroundColor = "";
        });
        nextBtn.classList.remove("hidden")
        selectedLi.style.backgroundColor = "rgb(119, 0, 255)";
        answer = questions[currentQuestion].answer;
        selectedanswer = selectedLi
      }

      function nextquestion(){
        if(selectedanswer.innerHTML === answer){
            score += 1;
        }
        currentQuestion ++;
        choicesList.innerHTML = " "
        if(currentQuestion < questions.length){
            showquestion()
        }
        else{
            questionContainer.classList.add("hidden")
            resultContainer.classList.remove("hidden")
            scoreDisplay.innerHTML = `${score} out of ${questions.length}`
        }
      }

      function restartQuiz(){
      currentQuestion = 0;
      score = 0;
      resultContainer.classList.add("hidden");
      startquiz();
      }

})
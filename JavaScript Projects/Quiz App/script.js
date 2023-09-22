// Define the questions for each level (basic, intermediate, expert) here
const questions = {
  basic: [
      {
          question: "What is JavaScript?",
          options: ["JavaScript is a scripting language used to make the website interactive", "JavaScript is an assembly language used to make the website interactive", "JavaScript is a compiled language used to make the website interactive", " None of the mentioned"],
          answer: "JavaScript is a scripting language used to make the website interactive",
      },
     
 
      {
        question: "Which type of JavaScript language is?",
        options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        answer: "Object-Based",
      },
      {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        options: ["It is an ordered list of values", " It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions"],
        answer: "It is an ordered list of values",
    },
  ],
  intermediate: [
      {
          question: "Will the following JavaScript code work? var js = (function(x) {return x*x;}(10));",
          options: ["Exception will be thrown", " Memory leak", " Error", "Yes, perfectly"],
          answer: "Yes, perfectly",
      },
      {
          question: "Which of the following is not javascript data types?",
          options: ["Null type", " Undefined type", "Number type", "All of the mentioned"],
          answer: "All of the mentioned",
      },
      {
        question: "Where is Client-side JavaScript code is embedded within HTML documents?",
        options: [" A URL that uses the special javascript:code", "  A URL that uses the special javascript:protocol", "A URL that uses the special javascript:encoding", "A URL that uses the special javascript:stack"],
        answer: " A URL that uses the special javascript:protocol",
    },
  ],
  expert: [
      {
          question: " Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
          options: ["Position", " Window", "Standard", "Location"],
          answer: "Window",
      },
      {
          question: " Which of the following can be used to call a JavaScript Code Snippet?",
          options: [" Function/Method", " Preprocessor", "Triggering Event", "CuRMI"],
          answer: "Function/Method",
      },
      {
        question: " Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
        options: [" will work perfectly well on a Windows Machine", "  will be displayed as JavaScript text on the browser", "will throw errors and exceptions", "must be restricted to a Unix Machine only"],
        answer: "will work perfectly well on a Windows Machine",
    },
  ],
};

let currentLevel = "";
let currentQuestionIndex = 0;
let score = 0;

const levelButtons = document.querySelectorAll(".level-buttons button");
const questionElement = document.getElementById("question");
const optionsContainer = document.querySelector(".options"); // Reference the options container
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

// Event listeners for level buttons
levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
      currentLevel = button.id;
      currentQuestionIndex = 0;
      score = 0;
      displayQuestion();
  });
});



// Display the current question
function displayQuestion() {
  const currentQuestion = questions[currentLevel][currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Clear any previous options
  optionsContainer.innerHTML = "";

  // Check if options are defined for the current question
  if (currentQuestion.options && currentQuestion.options.length > 0) {
      // Add buttons for the available options
      currentQuestion.options.forEach((optionText, index) => {
          const optionButton = document.createElement("button");
          optionButton.classList.add("option");
          optionButton.textContent = optionText;
          optionButton.addEventListener("click", () => handleOptionClick(optionText));
          optionsContainer.appendChild(optionButton);
      });
  } else {
      // Handle the case where there are no options (for example, if the question is missing options)
     
      console.error("No options available for this question.");
  }
}
// Define the handleOptionClick function
function handleOptionClick(selectedOption) {
  const currentQuestion = questions[currentLevel][currentQuestionIndex];

  // Loop through the buttons and find the one with the matching text content
  const buttons = optionsContainer.querySelectorAll(".option");
  for (const button of buttons) {
      if (button.textContent === selectedOption) {
          if (selectedOption === currentQuestion.answer) {
              // Handle correct answer (e.g., change button color to green)
              button.style.backgroundColor = "green";
              score++; // Increment the score
          } else {
              // Handle wrong answer (e.g., change selected button color to red and correct button color to green)
              button.style.backgroundColor = "red";
              for (const btn of buttons) {
                  if (btn.textContent === currentQuestion.answer) {
                      btn.style.backgroundColor = "green";
                      break;
                  }
              }
          }
      }
  }

  // Increment the question index
  currentQuestionIndex++;

  // Delay before moving to the next question or showing the result
  setTimeout(() => {
      if (currentQuestionIndex < questions[currentLevel].length) {
          displayQuestion(); // Display the next question
      } else {
          showResult(); // Show the quiz result
      }
  }, 1000);
}



// Reset option button colors
function resetOptions() {
  optionsElements.forEach((optionElement) => {
      optionElement.style.backgroundColor = "#007BFF";
  });
}

// Display the quiz result
function showResult() {
  questionElement.textContent = "";
  optionsContainer.innerHTML = "";
  
  // Clear the buttons instead of optionsElements
  resultElement.textContent = "Quiz Completed!";
  scoreElement.textContent = `Your Score: ${score} / ${questions[currentLevel].length}`;
}

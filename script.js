const quizData = [
  { filename: 'ICE1.jpg', answer: 'ICE' },
  { filename: 'ICE2.jpg', answer: 'ICE' },
  { filename: 'terror1.jpg', answer: 'Terrorist' },
  { filename: 'terror2.jpg', answer: 'Terrorist' }
];

let currentIndex = 0;
let score = 0;

function showImage() {
  if (currentIndex < quizData.length) {
    document.getElementById("quiz-image").src = "images/" + quizData[currentIndex].filename;
  } else {
    showResult();
  }
}

function submitAnswer(choice) {
  const correct = quizData[currentIndex].answer;
  if (choice === correct) score++;
  currentIndex++;
  showImage();
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").innerText = `${score} out of ${quizData.length}`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
  showImage();
}

function shareResults() {
  const text = encodeURIComponent(`I scored ${score}/${quizData.length} on the ICE or Terrorist quiz! Try it here:`);
  const url = window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
}

window.onload = showImage;
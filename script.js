const quizData = [
  {
    filename: 'ICE1.jpg',
    answer: 'ICE',
    source: 'https://example.com/police1'
  },
  {
    filename: 'terror1.jpg',
    answer: 'Terrorist',
    source: 'https://example.com/paramilitary2'
  },
  {
    filename: 'terror2.jpg',
    answer: 'Terrorist',
    source: 'https://example.com/police3'
  },
  {
    filename: 'ICE2.jpg',
    answer: 'ICE',
    source: 'https://example.com/police3'
  }
  // Add more items as needed
];

let currentIndex = 0;
let score = 0;

function showImage() {
  if (currentIndex >= quizData.length) {
    showResult();
    return;
  }

  const quizImage = document.getElementById("quiz-image");
  quizImage.src = `images/${quizData[currentIndex].filename}`;

  // Hide feedback and next button
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("next-button").style.display = "none";
}

function submitAnswer(choice) {
  const current = quizData[currentIndex];
  const feedback = document.getElementById("feedback");

  if (choice === current.answer) {
    score++;
    feedback.innerHTML = `<span class="correct">✅ You're right!</span> 
      <a href="${current.source}" target="_blank">[Source]</a>`;
    feedback.className = "feedback correct";
  } else {
    feedback.innerHTML = `<span class="incorrect">❌ Nope.</span> 
      <a href="${current.source}" target="_blank">[Source]</a>`;
    feedback.className = "feedback incorrect";
  }

  // Show the Next button
  document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;
  showImage();
}

function showResult() {
  const quiz = document.getElementById("quiz");
  const resultHTML = `
    <h2>You scored ${score} out of ${quizData.length}.</h2>
    <button onclick="shareResults()">Share Your Results</button>
  `;
  quiz.innerHTML = resultHTML;
}

function shareResults() {
  const url = encodeURIComponent(window.location.href);
  const text = `I scored ${score}/${quizData.length} on the "ICE or Terrorist?" quiz!`;

  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  const email = `mailto:?subject=Try%20this%20quiz!&body=${encodeURIComponent(text)}%20${url}`;

  const shareHTML = `
    <p>Share your results:</p>
    <a href="${twitter}" target="_blank">🐦 Twitter</a><br>
    <a href="${facebook}" target="_blank">📘 Facebook</a><br>
    <a href="${linkedin}" target="_blank">💼 LinkedIn</a><br>
    <a href="${email}" target="_blank">✉️ Email</a>
  `;

  document.getElementById("quiz").innerHTML += shareHTML;
}


// Start the quiz
window.onload = showImage;

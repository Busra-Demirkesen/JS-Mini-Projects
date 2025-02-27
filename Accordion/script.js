const questionsAnswers = document.querySelectorAll(".question-answer");

const titleQuestion = document.querySelectorAll(".title_question");



questionsAnswers.forEach(function(question) {
 
    const button = question.querySelector(".question_button");

  button.addEventListener('click', function () {
  
    questionsAnswers.forEach(function(item) {
      if (item !== question) {
        item.classList.remove("show-answer");
      }
    });

  
    question.classList.toggle("show-answer");
  });
});

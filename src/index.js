const questions = Array.from(
  document.querySelectorAll(".question")
);

const open = e => {
  const question = e.target;
  const answer = e.target.nextSibling;

  if (!answer.classList.contains("open")) {
    answer.classList.add("open");
  } else {
    answer.classList.remove("open");
  }

  if (!question.classList.contains("opened")) {
    question.classList.add("opened");
  } else {
    question.classList.remove("opened");
  }

  if (
    !question.childNodes[0].classList.contains(
      "arrow-turn"
    )
  ) {
    question.childNodes[0].classList.add("arrow-turn");
  } else {
    question.childNodes[0].classList.remove(
      "arrow-turn"
    );
  }

  questions.forEach(function(item) {
    if (item !== e.target) {
      console.log(item.classList);
      item.classList.remove("opened");
      item.nextSibling.classList.remove("open");
      item.childNodes[0].classList.remove(
        "arrow-turn"
      );
    }
  });
};

const addClickEvent = () => {
  questions.forEach(function(item) {
    item.onclick = open;
  });
};

addClickEvent();

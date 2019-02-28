const questions = Array.from(
  document.querySelectorAll(".question")
);

const open = e => {
  const question = e.target;
  const answer = e.target.nextSibling;
  let height = answer.childNodes[0].offsetHeight;
  console.log(height);

  if (!answer.classList.contains("open")) {
    answer.classList.add("open");
    answer.setAttribute("style", `height: ${height}px`);
  } else {
    answer.classList.remove("open");
    answer.setAttribute("style", `height: 0px`);
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
      item.classList.remove("opened");
      item.nextSibling.classList.remove("open");
      item.childNodes[0].classList.remove("arrow-turn");
      item.nextSibling.setAttribute(
        "style",
        `height: 0px`
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

const refs = {
  btnProjectsScroll: document.querySelector("[data-scroll]"),
  sectionProjects: document.querySelector("#projects"),
  sectionNews: document.querySelector("#news"),
  sectionFeedback: document.querySelector("#feedback"),
  navList: document.querySelector(".nav__list"),
  form: document.querySelector(".form"),
};

refs.btnProjectsScroll.addEventListener("click", onBtnClick);
refs.navList.addEventListener("click", onNavLinkClick);
refs.form.addEventListener("submit", onSubmitForm);

function onBtnClick(e) {
  e.preventDefault();
  refs.sectionProjects.scrollIntoView({ behavior: "smooth" });
}

function onNavLinkClick(e) {
  e.preventDefault();

  if (e.target.dataset.link === "news") {
    refs.sectionNews.scrollIntoView({ behavior: "smooth" });
  }

  if (e.target.dataset.link === "projects") {
    refs.sectionProjects.scrollIntoView({ behavior: "smooth" });
  }

  if (e.target.dataset.link === "feedback") {
    refs.sectionFeedback.scrollIntoView({ behavior: "smooth" });
  }
}

function onSubmitForm(e) {
  e.preventDefault();

  const email = e.target.elements.email;
  const name = e.target.elements.name;

  if (email.value === "" && name.value === "") {
    alert("Всі поля форми повинні бути заповнені");
    email.classList.add("form__input--error");
    name.classList.add("form__input--error");
  } else {
    alert("Ваші данні відправленні");
    email.classList.remove("form__input--error");
    name.classList.remove("form__input--error");
    email.value = "";
    name.value = "";
  }
}



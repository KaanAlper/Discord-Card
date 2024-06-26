const profilLogo = document.querySelectorAll(".profil-logo");
const roleAdd = document.querySelectorAll(".role-add");
const input = document.querySelectorAll(".message input");
const modal = document.querySelector(".modal-container");
const helpBtn = document.querySelector(".help-btn");
const feedbackInput = document.querySelector("#feedback-input");

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const ramdomWord = () => {
  const words = [
    "468376","311042","260943","352759","271339",
    "Last Game Bender",
    "Liberal Captitalism Fallower",
    "Best Of Creatures",
    "SuperD",
    "Mr. White's Student",
    "Sir What is Your Emergency",
    "I'm Average",
    "Gorgeous😎",
    "AmIStanley?",
    "A Real Meme Guy",
    "Truman Show Producter",
    "Analytic Geometry Lover",
    "BestintheWest",
    "☝︎✌︎💧︎❄︎☜︎☼︎☹︎⚐︎✞︎☜︎☼︎",
    "ExcuseMePriencess",
    "CouldYouBeMyPersona",
    "Thinking...",
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const addRole = (card) => {
  const role = document.createElement("div");
  const roleColor = document.createElement("div");
  const roleText = document.createElement("p");
  role.classList.add("role");
  roleColor.classList.add("role-color");
  roleColor.style.backgroundColor = randomHexColor();
  roleText.innerText = ramdomWord();
  role.append(roleColor, roleText);
  card.parentElement.append(role, card);
  removeRole();
};

const removeRole = () => {
  const roles = document.querySelectorAll(".role-color");
  roles.forEach((role) => {
    role.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
};

const toggleModal = () => {
  modal.classList.toggle("active");
};

profilLogo.forEach((logo) => {
  logo.addEventListener("click", toggleModal);
});

roleAdd.forEach((add) => {
  add.addEventListener("click", () => {
    addRole(add);
  });
});

input.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      input.value = "";
      input.blur();
      toggleModal();
    }
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    toggleModal();
  }
});

helpBtn.addEventListener("click", () => {
  toggleModal();
});

feedbackInput.addEventListener("keyup", (e) => {
  const feedbackState = document.querySelector(".feedback-state");
  if (e.key === "Enter") {
    feedbackInput.blur();
    // Api wiil be add soon for a complete feedback system for me ( more big project will be add soon on my github, that's why would be nice to have a feedback system ) :)
    feedbackState.classList.add("error");
    feedbackState.innerText = "If you really want to tell me something, text me on steam or discord...";
  }
});

removeRole();

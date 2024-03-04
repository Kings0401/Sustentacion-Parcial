// Elements
const signUpCardEl = document.querySelector(".sign-up-card");
const successCardEl = document.querySelector(".success-card");
const signUpFormEl = document.querySelector(".sign-up-form");
const emailIn = document.getElementById("email");
const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const submittedEmailEl = document.querySelector(".submitted-email");

// Event-listeners
submitBtn.addEventListener("click", submitEmail);
dismissBtn.addEventListener("click", toggleCards);

// Functions
// toggle cards
function toggleCards() {
  signUpCardEl.classList.toggle("hidden");
  successCardEl.classList.toggle("hidden");
}

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

// submit email form
function submitEmail(e) {
  e.preventDefault();

  // valid email
  if (validateEmail(emailIn.value)) {
    // Si el checkbox está marcado, mostrar la ventana de éxito
    if (document.getElementById("agree").checked) {
      submittedEmailEl.innerText = emailIn.value;
      toggleCards();
      emailIn.value = "";
      signUpFormEl.classList.remove("error");
    } else {
      // Si el checkbox no está marcado, mostrar el mensaje en el mismo DOM
      document.getElementById("no-agree-message").classList.remove("hidden");
    }
  }
  // invalid email
  else {
    signUpFormEl.classList.add("error");
  }
}

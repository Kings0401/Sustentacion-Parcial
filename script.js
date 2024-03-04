// Elements
const tap1 = document.getElementById("tap1")
const successCardEl = document.querySelector(".success-card");
const signUpFormEl = document.querySelector(".sign-up-form");
const emailIn = document.getElementById("email");
const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const submittedEmailEl = document.querySelector(".submitted-email");
var tap3 = document.getElementById('no-agree-message');
const volverbtn1 = document.getElementById("btnvolver");

tap1.classList.remove("hidden");
// Event-listeners
submitBtn.addEventListener("click", submitEmail);
dismissBtn.addEventListener("click", toggleCards);
volverbtn1.addEventListener("click",volverbtn);

function volverbtn(){
  tap1.classList.remove("hidden");
  tap3.classList.add("hidden");
}
// Functions
// toggle cards
function toggleCards() {
  tap1.classList.toggle("hidden");
  successCardEl.classList.toggle("hidden");
}

function validateEmail(email) {
  const regex = /^[A-Z][a-zA-Z]*\d{2,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email));
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
      tap1.classList.add("hidden");
      tap3.classList.remove("hidden");
      // Si el checkbox no está marcado, mostrar el mensaje en el mismo DOM
      //document.getElementById("no-agree-message").classList.remove("hidden");
    
    }
  }
  // invalid email
  else {
    signUpFormEl.classList.add("error");
    console.log("El email debe contener la primera letra en mayuscula y 2 numeros")
  }
  
}


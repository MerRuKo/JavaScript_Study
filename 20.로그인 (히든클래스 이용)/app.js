const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
   event.preventDefault(); // submit시 자동새로고침 막기
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
// greeting.innerText = "Hello " + username; // 이것보다는
   greeting.innerText = `Hello ${username}`; // 이게멋있다 (작은따옴표 아니고 백틱기호다 물결표시랑 같이 있는거 (``) )
   greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit)
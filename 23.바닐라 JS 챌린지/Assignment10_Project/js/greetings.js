// 로그인・미로그인시 화면 분기 구현

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
   event.preventDefault(); // submit시 자동새로고침 막기
   loginForm.classList.add(HIDDEN_CLASSNAME); // 클래스에 hidden 속성 부여로 폼 숨기기
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

function paintGreetings(username) {
   greeting.innerText = `Hello~ ${username}!`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME); // 클래스에 hidden 속성 제거로 폼 노출
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}

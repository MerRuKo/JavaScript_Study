// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// or

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function boom() {
   // console.dir(loginInput); // input 오브젝트의 여러가지 속성을 콘솔창에서 확인 가능. 그 속성들 중에 value를 발견!
   console.log(loginInput.value);
   console.log("boom"); 
}

loginButton.addEventListener("click", boom)
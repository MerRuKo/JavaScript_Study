const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
   event.preventDefault(); // submit 했을때 브라우저의 기본 동작인 자동새로고침을 막아주는 함수. 이게 있으면 submit 해도 페이지 새로고침 안한다.
   // 변수명은 event 로 짓는게 관행이라서 event로 한 것일뿐이다.
   console.log(event); // submit 시 js는 방금 일어난 이벤트에 대한 정보를 제공해주는데, 이렇게 인수를 정의해서 받아오면 된다. 콘솔로 확인해보면 event 객체의 정보를 확인 가능하다.
   // 위의 preventDefault 함수도 event 객체가 가지고 있는 기본 함수 중 하나이다.
}

// 예를 들어 이벤트가 submit이 아니라 click 이었다면 event 객체 정보 속에 클릭 당시의 커서의 x좌표 y좌표 값이 들어있다.

loginForm.addEventListener("submit", onLoginSubmit)
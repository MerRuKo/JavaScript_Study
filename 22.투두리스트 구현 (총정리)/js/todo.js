const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("input"); // 위에꺼랑 같음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify -> 객체를 JSON 형식으로 바꿔준다. 중복값도 가질 수 있게 됨.
    // a,b,c -> ["a","b","c"] (형태만 그렇지 진짜 배열은 아님) // localStorage안에는 배열은 저장되지 않고 텍스트만 저장되기 때문. 배열 형태로 저장할 필요가 있다.
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; // li의 id값에 넘어온 입력값(오브젝트)의 id를 부여한다.
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// function sexyFilter(todo) {
//     return todo.id !== li.id;
// }

function deleteToDo(event) {
    const li = event.target.parentElement; // 버튼 이벤트 일어날 당시의 이벤트 정보 속에서, 눌려진 버튼의 부모 element를 찾아내고,
    li.remove(); // 그걸 삭제한다. 즉 li의 자식인 span,button이 한꺼번에 삭제된다.
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); // filter는 사용자정의 filter 함수 인자만 받는다. li.id는 String이라 형변환.
    // toDos = toDos.filter(sexyFilter); // 위에 함수는 함수 따로 정의 안하고 간략화 한거고 이게 원래 표현.
    saveToDos();

    // filter는 배열값 중에서 필터링 기준에 안 맞는 녀석을 제거한 상태의 "새로운 배열"을 만들어서 리턴해주는 함수이다.
    // 그리고 뭘 기준으로 필터링 할건지 정해주는 내용이 filter 함수의 파라미터에 들어가는거다.
    // todo => toDos 배열 안의 요소들. (todo로 했지만 어떤 이름으로 해도 상관없다.) 얘네들이 차례대로 들어가서 li.id와 비교된다.
    // 여기서는 필터링 기준이 todo.id랑 li.id가 서로 맞는 경우 true, 안 맞는 경우 false를 리턴하니까,
    // true된 배열요소는 남겨두고 false된 배열요소만 지워서 새로운 배열로 리턴해주는 것.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = { // 삭제기능 구현을 위해, 입력값을 단순 text가 아니라 아이디를 가진 오브젝트화 시켜서 넘겨준다.
        text : newTodo,
        id : Date.now() // 랜덤값 부여에 쓸만한 Date.now() (1000분의 1초까지 계산해줌)
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const SavedToDos = localStorage.getItem(TODOS_KEY);

if (SavedToDos !== null) {
    const parsedToDos = JSON.parse(SavedToDos); // JSON.parse -> JSON.stringify로 json 형식으로 바꾼 string 녀석을 진짜 배열로 바꿔준다.
    toDos = parsedToDos; // 이거 없으면 새로고침 했을때 localStorage 값이 저장 안됨.
    parsedToDos.forEach(paintToDo) // array.forEach -> 가지고 있는 배열 요소수만큼 함수를 실행시켜준다. (그냥이 아니고 차례대로 요소를 파라미터로 보내면서.)
    // paintToDo는 문자를 인수로 받는다. 즉, 저장되어있는 localStorage의 배열 요소화 된 값이 차례대로 paintToDo의 파라미터로 넘겨지고 실행되게 된다.
}

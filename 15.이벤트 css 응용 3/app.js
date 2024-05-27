const title = document.querySelector(".hello h1");

function handleTitleClick() {
   title.classList.toggle("clicked")
}

// 기존의 방법 (이벤트 css 응용 2) 을 단 1줄의 코드로 줄일 수 있는 toggle.
// toggle은 title의 classList에 clicked class가 포함돼있는지 확인해서 있으면 제거해주고 없으면 추가해준다. 
// 밑에 코드랑 똑같이 동작한다.

// const clickedClass = "clicked"
// if (title.classList.contains(clickedClass)){
//     title.classList.remove(clickedClass);
// } else {
//     title.classList.add(clickedClass);
// }

title.addEventListener("click", handleTitleClick);
const title = document.querySelector(".hello h1"); // css속성으로 요소 캐치해서 변수에 격납

function handleTitleClick() { // 동작함수 정의
    console.log("title was clicked!");
}

function handleMouseEnter() { // 동작함수 정의
    title.innerText = "Mouse is here!";
    title.style.color = "red";
}

function handleMouseLeave() { // 동작함수 정의
    title.innerText = "Mouse is gone!";
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick); // 변수에 이벤트 붙여서 클릭시 동작함수 터지게 정의.
// 함수 끝에 () 안 들어가는게 포인트. 왜? () 붙이면 즉시 실행하는건데 클릭 감지한 후에 실행해야하니까.

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

const title = document.querySelector(".hello h1");

function handleTitleClick() {

    const clickedClass = "clicked"

    if (title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }
}

// 기존의 방법 (이벤트 css 응용 1) 은 class 전체 내용을 바꿔버려서 보존하고 싶은 class까지 함께 바뀌어버림.
// 그걸 방지하기 위해 classList 를 써서 통째로삭제-통째로추가 가 아니라 삭제-추가 로 변형한 것.
// 기존의 방법은 sexy-font 까지 날려버렸겠지만 이 방법은 클릭해도 sexy-font를 끝까지 유지한다.

title.addEventListener("click", handleTitleClick);
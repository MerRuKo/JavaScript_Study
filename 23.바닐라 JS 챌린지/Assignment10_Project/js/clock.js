// 시계 구현

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    // padStart(2,"0") => 무조건 2자리로 표기하고 비어있는 자리는 0으로 패딩하라는 뜻. String 리턴이라 스트링으로 형변환 해줘야 됨.
    // 이거 안하면 자릿수 고정 안돼서 시간 표기가 안 이쁨

    clock.innerText = `${hours}:${minutes}:${seconds}`
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock(); // 이거 안깔아두면 00:00:00 가 1초 동안 보여짐
setInterval(getClock, 1000); // 함수를 1000ms(1초) 마다 실행하게 하는 내장 함수

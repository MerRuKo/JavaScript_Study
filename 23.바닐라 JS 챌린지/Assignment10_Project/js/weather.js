const API_KEY = ""; // openweathermap 가입하니까 나한테 준 API 사용할 수 있게 해주는 고유키.
// API키 하드코딩하고 깃허브에 올리면 GitGuardian에서 경고 메일 날아오니까,
// 테스트 할땐 https://home.openweathermap.org/api_keys 여기서 직접 취득해서 붙여넣기 바람.

function onGeoOk(position) { // 취득성공시함수
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // openweathermap에서 제공하는 Current Weather Data API 로 연결되는 url. 위도 경도 api키 세개가 필요하다.
    // units=metric 화씨를 섭씨로 바꿔주는 파라미터

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
            city.innerText = data.name;
    });
}

function onGeoErr() { // 취득실패시함수
    weather.innerText = "Failed to load weather information";
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr); // getCurrentPosition는 성공시함수,실패시함수 두개를 인자로 받는다.

// 랜덤 배경이미지

const images = [
    "korea.jpg",
    "japan.jpg",
    "spain.jpg",
    "france.jpg",
    "germany.jpg",
    "china.jpg",
    "america.jpg",
    "england.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)]; // 랜덤이미지 선정
const bgImage = document.createElement("img"); // 비어있는 img 태그 생성
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); // src 채워넣은 img태그를 body에 추가하기

// 랜덤 배경이미지에 따른 소개문

const picDesc = document.getElementById("picDesc");

function displayPicDesc() {
    const picPath = document.querySelector("img").getAttribute("src");
    switch(picPath){
        case "img/korea.jpg":
            picDesc.innerText = "대한민국, 광화문";
            break;
        case "img/japan.jpg":
            picDesc.innerText = "일본, 히메지성";
            break;
        case "img/spain.jpg":
            picDesc.innerText = "스페인, 성가족 대성당";
            break;
        case "img/france.jpg":
            picDesc.innerText = "프랑스, 에펠탑";
            break;
        case "img/germany.jpg":
            picDesc.innerText = "독일, 노이슈반슈타인성";
            break;
        case "img/china.jpg":
            picDesc.innerText = "중국, 만리장성";
            break;
        case "img/america.jpg":
            picDesc.innerText = "미국, 자유의 여신상";
            break;
        case "img/england.jpg":
            picDesc.innerText = "영국, 버킹엄 궁전";
            break;
        default:
            return;
}
};

displayPicDesc();

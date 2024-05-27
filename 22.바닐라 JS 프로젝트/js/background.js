const images = ["barcelona.jpg","himeji.jpg","paris.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); // 비어있는 img 태그 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // src 채워넣은 img태그를 body에 추가하기
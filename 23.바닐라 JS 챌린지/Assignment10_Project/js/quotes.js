// 명언 대신 아재개그 10선 랜덤 표시

const quotes = [
    {
        quote: "꽃가게 주인이 가장 싫어하는 도시는?",
        author: "시드니",
    },
    {
        quote: "화장실에 다녀온 원숭이를 뭐라고 할까?",
        author: "일본원숭이",
    },
    {
        quote: "세상에서 가장 긍정적인 동물은?",
        author: "돼지",
    },
    {
        quote: "사람의 옷을 벗게 할 수 있는 식물은?",
        author: "버섯",
    },
    {
        quote: "할아버지들이 제일 좋아하는 돈은?",
        author: "할머니",
    },
    {
        quote: "바람이 귀엽게 부는 곳은 어디일까?",
        author: "분당",
    },
    {
        quote: "돌잔치를 영어로 하면?",
        author: "락페스티벌",
    },
    {
        quote: "왕과 작별인사를 뭐라고 할까?",
        author: "바이킹",
    },
    {
        quote: "빵이 시골로 간 까닭은?",
        author: "소보로",
    },
    {
        quote: "겨울에 하는 전쟁을 뭐라고 할까?",
        author: "추워",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quotesLength = quotes.length;

const todaysQuote = quotes[Math.floor(Math.random()*quotesLength)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// console.log(quotes[Math.floor(Math.random()*10)]); // quotes 숫자가 늘어나면 10부터 계속 늘려줘야 됨
// Math.ceil() : 올림
// Math.floor() : 내림
// Math.round() : 반올림

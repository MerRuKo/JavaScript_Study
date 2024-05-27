// console.log 의 console도 오브젝트다. 기본제공이지만. 오브젝트가 가진 log 펑션을 쓴 거지.

// 사용자정의오브젝트를 만들어보자.

let playerName = "MerRuKo";
let playerHp = 100;
let playerMp = 50;

// let player = [playerName,playerHp,playerMp]; // 예를 들어 게임에서 캐릭터를 만드는데 배열은 좋은 방법 아님

const player = {
    name : "MerRuKo",
    hp : 100,
    mp : 50
}

// 이런식으로 오브젝트가 훨씬 효율적이다

console.log(player.name);
console.log(player.hp);
console.log(player.mp);

// 쉽고 논리정연히 호출 가능

player.hp = 200;
player.class = "Knight";

console.log(player); // {name: 'MerRuKo', hp: 200, mp: 50, class: 'Knight'}

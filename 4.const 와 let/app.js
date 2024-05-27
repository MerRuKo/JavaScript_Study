const constName = "hoya" // const(상수)는 값 변경 불가능
let letName = "hoya" // let(변수)은 값 변경 가능
var varName = "hoya" // 위에 두개만 쓰고 var는 쓰지마라 절대!! var는 상수,변수의 암시를 줄 수 없으니 코드 가독성 떨어진다.

console.log("hello" + constName);
console.log("hello" + letName);

letName = "NewHoya" // let은 값 변경 가능
//constName = "newHoya" // const라서 에러남

console.log("hello" + constName);
console.log("hello" + letName); // NewHoya러 바뀌어있음
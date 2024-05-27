const mon = "monday";
const sun = "sunday";

const daysOfWeek = [mon,sun];
const nonsense = [1,2,"hello",false,null,true,undefined,sun];

console.log(daysOfWeek); // (2) ['monday', 'sunday']
console.log(nonsense); // (8) [1, 2, 'hello', false, null, true, undefined, 'sunday']

console.log(daysOfWeek[0]); // monday

daysOfWeek.push("friday");

console.log(daysOfWeek[2]); // friday

console.log(daysOfWeek[3]); // undefined (0,1,2 까지 밖에 없으니)
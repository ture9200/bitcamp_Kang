
const readLine= require('readline-sync');
//const Console = require("console");
// const readlinesync= require(
// console.log("ODD EVEN")
// const answer= readLine.prompt()
// console.log(answer)

//각각 반지름 20,10
const r1=20
const r2=10

//원의 넓이= console.log(Math.PI)
const area1= Math.pow(r1,2)* Math.PI
const area2= Math.pow(r2,2)* Math.PI

// 원 넓이 차이점
let gap=area1-area2

//if 삼항연산자 (r1>r2 클수 있기때문에)
//if(gap<0){
// gap=gap*-1
// }
gap=gap<0? gap* -1 : gap

//소수점 둘째자리까지
gap=gap.toFixed(2)

//console.log ("이 도형의 넓이는"+ gap+"입니다.")
console.log( `이 도형의 넓이는 ${gap} 입니다`)

// 지수 2의 4승
const num= Math.pow(3,4)
console.log(num)


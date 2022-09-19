const readLine= require('readline-sync');
// 1ft 3.5m
// 300 *200
//문제: const perFeet=3.5

console.log("1피트당 샷시의 가격은 얼마인가요?")
console.perFeet= parseFloat(readLine.prompt())
//(readLine.prompt())은 화면에서 입력받으라는 node js 에서 제공하는 명령

console.log("가로길이는 얼마인가요? cm")
const width= parseInt(readLine.prompt())

console.log("세로길이는 얼마인가요? cm")
const height= parseInt(readLine.prompt())

//창문 =>가로 *2, 세로 *2 =>  전체 샷시 길이
const totalLength= (width*2)+(height *2)

//길이 (cm) => ft
const totalFeet= Math.ceil(totalLength/30.48)
//console.log(totalFeet)

//가격 계산
 const totalPay= totalFeet * perFeet
//console.log (totalPay+ "달러입니다.")
console.log(`총 ${totalPay}달러입니다`)

// Math.round() 반올림
// Math.ceil() 올림
// Math.floor() 내림


const arr=[4,3, 21, 43,77,22,11,45]

arr.sort((a,b)=> { //arr.sort((a,b)) 입력하면 자동전환
    console.log(a)
    console.log(b)
    console.log(a-b)
    console.log("------------")
    return a-b ////두 숫자의 차가 양수값이냐, 음수값이냐를 이용해서 오름차순으로 정렬화
})

console.log(arr)

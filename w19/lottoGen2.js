//배열 생성
const arr=[]

// 1~45까지 숫자 생성
for(let i=1; i<=45;i++){
    arr.push(i)

}
    console.log(arr)

// 왜 값이 뒤에 빠지는지 모르겠어요 ㅠㅠ
for(let i=0; i<6; i++){
    const idx=parseInt(Math.random()*arr.length)
   console.log(arr.splice(idx,1))
}
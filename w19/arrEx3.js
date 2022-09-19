const arr=[54,22,14,64,95,85]

//평균=> 모든 점수의 합(sum)/ 개수
//계속 써먹어야하는건 바깥, 잠깐 써먹는건 안에 ..
let sum=0

for(let i=0; i<arr.length; i++) {
    sum+=arr[i]
    console.log('SUM:' +sum )
    //console.log(`SUM:${sum}`)
}
    let avg=(sum/ arr.length).toFixed(3)
    console.log ('AVG:' +avg )

//최저
let min= 101
for(let i=0; i<arr.length; i++) {
    const score= arr[i]

    //만일 score가 min 보다 작으면 swap
    if(score<min){
        min=score
    }
}
 console.log('min:'+min )
// console.log(`min:${min}`)

//최고
let max=arr[0]
for(let i=0; i<arr.length; i++){
    const score= arr[i]

    //만일 score가 max 보다 작으면 swap
    if(score>max){
        max=score
    }
}
    console.log("max:"+max)
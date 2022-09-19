const arr=['타노스', '아이언맨', '블랙 위도우']
// console.log(arr.length)

 console.log(arr[0])
 console.log(arr[1])
 console.log(arr[2])
//console.log(arr[3]) = Error

//맨 마지막에 추가
const changedLength= arr.push("블랙팬서")
console.log(changedLength)

//몇번째 인덱스인지를 출력하는데 캡틴아메리카는 없기때문에 -1로 출력이 된다.
console.log(arr.indexOf("캡틴 아메리카"))
console.log(arr)

//arr.splice(index 위치, 삭제할 값 개수)
arr.splice(1,2)
//맨 마지막에서 arr[0]의 위치를 삭제
//arr.splice(0,1)
console.log(arr)

//for 문의 문장구조
for(let i=0; i<arr.length;i++) {
    //for(초기문; 검사식;변환식){

    //while(검사식){ 실행문}
    if (arr[i]==='블랙 위도우') {
        continue //블랙 위도우 건너띄고 반복을 이어나감
    }
    console.log(i)
    console.log(arr[i])
}
   console.log("------------")


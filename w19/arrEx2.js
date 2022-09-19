const arr=['AA', "BB", "CCC",'DDD']
console.log(arr["0"]) //'AA' 가 출력

//for문 , for루프라고 부름
//for(let i=0; i<10; i++) {
    // i++대신  i= i+1, i<10 (검사식 생략가능), let i =0 을 앞에 빼도 됨
    //for(;;) 로 가능 = while(true)
  //  console.log(i)

   // if(i>=10){
    //    break
    //}
//}

let i=0  //초기화
while(i<10) {  //조건식
    console.log(i)
    i++ //증감식
}

//while(true){   ->for(;;)문이랑 같음
// }

//for루프 -> while루프로 바꾸는 것 : 면접문제 많이 출시

//한번의 실행을 보증싶을때  ??뭘 말하는지 모르겠는데.. ㅠㅠ
let flag= false
//if(flag==false)

if (!flag){
  //do something..
    flag=!flag
}


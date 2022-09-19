 const arr=[]
 //const temp=[1,2,3]

 // 위의 []에 숫자가 추가 된다.
 //arr.push(1)
 //arr.push(2,3)
 //console.log(arr)

 while(true) {  //항상 true 무한루프
  //숫자를 생성 1-45 사이의 숫자 , 여기서 parseInt 는 소수를 정수로
  const num = parseInt(Math.random() * 45) + 1

  //반복된 숫자가 나오는지 검사
  const index = arr.indexOf(num)
 //console.log(`NUM:${num} INDEX:${index}`)

   if (index >= 0) {
    //차례가 0보다 크면 계속 돌아가는데
    continue
   }
   const newLength = arr.push(num)

   if(newLength===6){
   //배열에 담겨져 있는 숫자개수가 여섯개 되면 break
   break
  }

 }
 console.log(arr) //java에서는 UNREACHABLE CODE

//1.빈배열
 //2.배열에 숫자를 채워넣는다. 1~45 반복문
 //3.
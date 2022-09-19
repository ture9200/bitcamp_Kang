
const pointArr=[
    {name:'A',xpos:3,ypos:10},  //A의 x축은 3, y축은 10에 위치
    {name:'B',xpos:7,ypos:6},
    {name:'C',xpos:3,ypos:2},
    {name:'D',xpos:6,ypos:2}
]

const target={xpos:6, ypos:3}  //기준을 x:6, y:3로 했을때

// 가까운 위치 순으로 배열정렬
pointArr.sort((a,b) => {
    const distanceA=Math.sqrt(Math.pow(a. xpos-target.xpos, 2)+ Math.pow(a.ypos-target.ypos,2))
    const distanceB=Math.sqrt(Math.pow(b. xpos-target.xpos, 2)+ Math.pow(b.ypos-target.ypos,2))

    return distanceA-distanceB

})

    console.log(pointArr)


//for(const pointArrElement of pointArr) {  //pointArr의 각 배열들을 출력
//      console.log(pointArrElement)
//
//      //target과 pointArrElement 의 거리계산
//      const distance= Math.sqrt(Math.pow(pointArrElement. xpos-target.xpos, 2)+
//      Math.pow(pointArrElement.ypos-target.ypos,2))
//
//      console.log(distance)
//  }


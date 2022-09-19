const arr=[
    {month:1, total:90}, {month:2, total:87}, {month:3, total:140},
    {month:4, total:120}, {month:5, total:130}, {month:6, total:150},
    {month:7, total:180}, {month:8, total:240}, {month:9, total:200},
    {month:10, total:180}, {month:11, total:140}, {month:12, total:190}
]

const parr=[]
//240이 최고 금액인것을 찾기
let max=0
let min=0
let month=0

for (let i=0; i< parr.length; i++){
        if (parr[i]> max) {
            max=parr[i]}
        else{
            min = parr[i]}
        }
            console.log("max:"+max)
            console.log("month:"+(month)+"입니다.")
        }

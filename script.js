
let days=document.querySelector('.day'),
    hour=document.querySelector('.hour'),
    minute=document.querySelector('.minute'),
    second=document.querySelector('.second'),
    Msecond=document.querySelector('.Msecond')

let now=new Date().getFullYear()
let newYear=new Date(now+1,0,1)


function timer() {
    let timeInFact= new Date()
    let differenceInMS=newYear-timeInFact

    let d = Math.floor(differenceInMS / 1000 / 60 / 60 / 24),
        h = Math.floor(differenceInMS / 1000 / 60 / 60) % 24,
        m = Math.floor(differenceInMS / 1000 / 60) % 60,
        s = Math.floor(differenceInMS / 1000) % 60
        ms = Math.floor(differenceInMS)%1000

        days.innerHTML= d<10?'0'+d:d
        hour.innerHTML= h<10?'0'+h:h
        minute.innerHTML= m<10?'0'+m:m
        second.innerHTML= s<10?'0'+s:s
        Msecond.innerHTML= ms<10?'00'+ms:ms<100?'0'+ms:ms


        setTimeout(() => timer(), 1);
}
timer()

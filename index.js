var number= Number(document.getElementById('number').innerHTML)


function increment(){
    document.getElementById('number').innerHTML=number
    number=number+1

}
function decrement(){
    document.getElementById('number').innerHTML=number
    number=number-1

}
function neutral(){
    document.getElementById('number').innerHTML=0

}

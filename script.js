

let button = document.getElementById('button')
let password = document.getElementById('password')
let numArray = []
let charArray = ['A','B','C','C','D','E','F','G','H','I','J','K','L','M','N']
let symbolArray = ['(','#','%','&','*','^','!']
let array = []

//for adding numbers to numArray[]
for(let i=0;i<=9;i++){
    numArray.push(i)
    console.log(numArray[i])
}

button.addEventListener('click' , function(){
    
    password.value = ''


console.log('clicked')
    for(let i=0;i<=5;i++){
        let num = gen();
    let char = gen2();
    let sign = gen3();
    console.log(char + num + sign)
    array.push(num)
    array.push(char)
    array.push(sign)
    }

    
    for(let i=0;i<=array.length-1;i++){
        console.log(array[i])
        password.value += array[i]
        
    }
    array = []
})

function gen(){
    let num = Math.floor(Math.random()*numArray.length)
    return num
}
function gen2(){
    let char = Math.floor(Math.random()*charArray.length)
    return charArray[char]
}
function gen3(){
    let sign = Math.floor(Math.random()*symbolArray.length)
    return symbolArray[sign]
}
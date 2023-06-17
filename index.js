function Solve(value){
    document.getElementById('inputDisplay').innerHTML += value
}

function Result(){
    let num1 = document.getElementById('inputDisplay').innerHTML
    let ans = eval(num1)
    document.getElementById('inputDisplay').innerHTML = "= "+ans
}

function Clear(){
    document.getElementById('inputDisplay').innerHTML = ""
}

function Back(){
    let val = document.getElementById('inputDisplay').innerHTML 
    document.getElementById('inputDisplay').innerHTML = val.slice(0,-1)
}
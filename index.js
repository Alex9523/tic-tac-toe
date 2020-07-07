let table = document.querySelector('table')
table.onclick = function (event) {
    let target = event.target;
    target.innerHTML = '<h1>X</h1>'
    if(check() == true)
    setTimeout(computerAction, 1000)
    else return;
}

const arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const arrLength = arr.length

function stop(){
    let bool = false
    for(let i=0; i<10;i++)
    {
        if(document.querySelector(`#${arr[i]}`).textContent == 'X' || document.querySelector(`#${arr[i]}`).textContent == 'O')
        {
            bool = true
        }
        else return false
    }
    return bool
}

function computerAction() {
    let digit = 0
    let bool = true
    do {
        if(stop() == true)
        return
        digit = Math.floor(Math.random() * arrLength)
        console.log(digit + 1)
        let circle = document.querySelector(`#${arr[digit]}`)
        if (circle.textContent == 'X' || circle.textContent == 'O')
            bool = false
        else {
            bool = true
            circle.innerHTML = '<h1>O</h1>'
            check()
        }
    } while (bool == false)


}

function check() {
    if(document.querySelector('#one').textContent  == 'X' && document.querySelector('#two').textContent  == 'X' && document.querySelector('#three').textContent  == 'X' ||
       document.querySelector('#four').textContent  == 'X' && document.querySelector('#five').textContent  == 'X' && document.querySelector('#six').textContent  == 'X' || 
       document.querySelector('#seven').textContent  == 'X' && document.querySelector('#eight').textContent  == 'X' && document.querySelector('#nine').textContent  == 'X' ||
       document.querySelector('#one').textContent  == 'X' && document.querySelector('#five').textContent  == 'X' && document.querySelector('#nine').textContent  == 'X' ||
       document.querySelector('#three').textContent  == 'X' && document.querySelector('#five').textContent  == 'X' && document.querySelector('#seven').textContent  == 'X' ||
       document.querySelector('#one').textContent  == 'X' && document.querySelector('#three').textContent  == 'X' && document.querySelector('#seven').textContent  == 'X' ||
       document.querySelector('#two').textContent  == 'X' && document.querySelector('#five').textContent  == 'X' && document.querySelector('#eight').textContent  == 'X' ||
       document.querySelector('#three').textContent  == 'X' && document.querySelector('#six').textContent  == 'X' && document.querySelector('#nine').textContent  == 'X')
        {
            document.querySelector(`.game-area > h1`).innerHTML= "X WIN"
            return false
        }
        else if (document.querySelector('#one').textContent  == 'O' && document.querySelector('#two').textContent  == 'O' && document.querySelector('#three').textContent  == 'O' ||
        document.querySelector('#four').textContent  == 'O' && document.querySelector('#five').textContent  == 'O' && document.querySelector('#six').textContent  == 'O' || 
        document.querySelector('#seven').textContent  == 'O' && document.querySelector('#eight').textContent  == 'O' && document.querySelector('#nine').textContent  == 'O' ||
        document.querySelector('#one').textContent  == 'O' && document.querySelector('#five').textContent  == 'O' && document.querySelector('#nine').textContent  == 'O' ||
        document.querySelector('#three').textContent  == 'O' && document.querySelector('#five').textContent  == 'O' && document.querySelector('#seven').textContent  == 'O' ||
        document.querySelector('#one').textContent  == 'O' && document.querySelector('#three').textContent  == 'O' && document.querySelector('#seven').textContent  == 'O' ||
        document.querySelector('#two').textContent  == 'O' && document.querySelector('#five').textContent  == 'O' && document.querySelector('#eight').textContent  == 'O' ||
        document.querySelector('#three').textContent  == 'O' && document.querySelector('#six').textContent  == 'O' && document.querySelector('#nine').textContent  == 'O')
         {
             document.querySelector(`.game-area > h1`).innerHTML= "O WIN"
             return false
         }
         else
             return true
        
}

function restart(){
    for(let i=0; i<arrLength;i++)
        document.querySelector(`#${arr[i]}`).innerHTML = ""
        document.querySelector(`h1`).innerHTML= ""
        document.querySelector(`.game-area > h1`).innerHTML = "Game 2"

}
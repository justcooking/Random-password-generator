const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const alphAndNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const alphAndSymb = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let arr = []
let passwordSize = 0
let arrLen = 0
const p1El = document.getElementById("password1")
const p2El = document.getElementById("password2")
let passwordSizeEl = document.getElementById("SizeEl")
let hasNumber = false
let hasSymbol = false
//Here I should generate different numbers depending upon the checkboxes.
function generateRandom(){
    return Math.floor(Math.random()*arr.length)
}
function generatePassword(){
   let password = ""
   for(let i = 0 ; i < passwordSize ; i++){
        password += arr[generateRandom()]
   }
   return password
}
function generate(){
    passwordSize = Number(passwordSizeEl.value)
    hasNumber = document.getElementById("NumbersEl").checked
    hasSymbol = document.getElementById("specialEl").checked
    if(hasNumber && hasSymbol)
    arr = characters
    else if(!hasNumber && hasSymbol)
    arr = alphAndSymb
    else if(hasNumber && !hasSymbol)
    arr = alphAndNum
    else 
    arr = alphabets
    p1El.innerText = generatePassword()
    p2El.innerText = generatePassword()
}
p1El.addEventListener("click", function(){
    navigator.clipboard.writeText(p1El.innerText)
    p1El.innerText = "Copied!"
})
p2El.addEventListener("click", function(){
    navigator.clipboard.writeText(p2El.innerText)
    p2El.innerText = "Copied!"
})



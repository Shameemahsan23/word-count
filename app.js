let button =document.getElementById('btn');
console.log(button);
button.addEventListener('click', function(){
let word = document.getElementById('str').value;
let count = word.length; 
let outputDiv = document.getElementById('output');

outputDiv.innerHTML = `<h1>${count}</h1> `


}); 
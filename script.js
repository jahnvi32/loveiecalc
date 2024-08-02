const form = document.getElementById('loveCalculatorForm');
const result = document.getElementById('result');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const yourName = document.getElementById('yourName').value.trim();
  const partnerName = document.getElementById('partnerName').value.trim();
  if(yourName.length<=2){
    alert("Enter at least 3 letters");
}
if(partnerName.length<=2){
    alert("Enter at least 3 letters");
}
else{
  const loveScore = Math.floor(Math.random() * 101);
  result.innerText = `The love score between ${yourName} and ${partnerName} is ${loveScore}%! ❤️`;
}
});

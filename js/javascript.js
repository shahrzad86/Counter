const currentNum = document.getElementById('number');
const increseBtn = document.getElementById('increarse');
const resetBtn = document.getElementById('reset');
const decreseBtn = document.getElementById('decrease');   

let newNum; //global

//increase button 

increseBtn.addEventListener('click' , function(){
newNum = Number(currentNum.innerHTML) + 1;
currentNum.innerHTML = newNum;
});

// reset button
resetBtn.addEventListener('click' , function(){
currentNum.innerHTML = 0;
});

//decrease button
decreseBtn.addEventListener('click' , function(){
newNum = Number(currentNum.innerHTML) -1;
currentNum.innerHTML = newNum;
});
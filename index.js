const person1 = document.getElementById('person1');
const person2 = document.getElementById('person2');
const calCulate = document.getElementById('submit');
let showEl = document.querySelector('.result');





calCulate.addEventListener('click',function(){
    
    let myName = person1.value;
    let myCrush = person2.value;
    
    myName = myName.toLowerCase().split('');
    myCrush = myCrush.toLowerCase().split('');

    if((myName = '') || (myCrush = '') || (!isNaN(myName)) || (!isNaN(myCrush))){
        alert('Pls enter correct value');
    }

    let newWord = myName.concat(myCrush);
    
    let mynewWord = [...new Set(newWord)];

    showFlames(mynewWord.length);
   
})

function showFlames(input){
if(input === 1 || (input % 6 === 1)){
    showEl.textContent = 'FRIENDS';
    console.log('FRIENDS');
}
if(input === 2 || (input % 6 === 2)){
    showEl.textContent = 'LOVE';
    console.log('LOVE');
}
if(input === 3 || (input % 6 === 3)){
    showEl.textContent = 'AFFECTION';
    console.log('AFFECTION');
}
if(input === 4 || (input % 6 === 4)){
    showEl.textContent = 'MARRIAGE';
    console.log('MARRIAGE');
}
if(input === 5 || (input % 6 === 5)){
    showEl.textContent = 'ENEMY';
    console.log('ENEMY');
}
if(input === 6 || (input % 6 === 6)){
    showEl.textContent = 'SISTER';
    console.log('SISTER');
}
};



function roll (){
const diceNum=document.getElementById("numofdice").value;
const value=document.getElementById("numofdice");
const result=document.getElementById("result");
const imageResult=document.getElementById("images");
const values=[];
const images=[];

  for(let i=0;i<diceNum;i++){
let number=Math.floor(Math.random()*6 )+1;
values.push(number);
images.push(`<img src="dice/${number}.png">`);
}

result.textContent=values.join(',');
imageResult.innerHTML=images.join('');

}

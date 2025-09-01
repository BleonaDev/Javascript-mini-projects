const input1=document.getElementById("input1");
const input2=document.getElementById("input2");
const input3=document.getElementById("input3");
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
const button3=document.getElementById("button3");
const results1=document.getElementById("results1");
const results2=document.getElementById("results2");
const results3=document.getElementById("results3");

button1.onclick=function(){
    if (input1.value==""){
        results1.innerText=(`Please fill in the blank space`);
    } else{
    let answer=Number(input1.value)/100;
    results1.innerText=(`${input1.value} cm are ${answer.toFixed(2)} metres`);
    }
}
button2.onclick=function(){
    const cm=Number(input2.value);
    const inches=cm/2.54;
    results2.innerText=(`${cm} cm are ${inches.toFixed(2)} inches`);
}
button3.onclick=function(){
    const cm=Number(input3.value);
    const feet=cm/30.48;
    results3.textContent=(`${cm} cm are ${feet.toFixed(2)} feet`);
}


















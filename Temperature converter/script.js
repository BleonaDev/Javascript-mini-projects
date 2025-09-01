   const textBox=document.getElementById('input');
   const toFahreinheit=document.getElementById('toFahreinheit');
    const toCelcius=document.getElementById('toCelcius');
    const button=document.getElementById('button');
    const result=document.getElementById('output');
 
 function Convert(){
 if(toFahreinheit.checked){   
    let fahreinheit=(textBox.value * 9/5) + 32; 
    result.innerHTML=`${textBox.value}°C is ${fahreinheit.toFixed(2)}°F`;
 }
 else if(toCelcius.checked){
    let celcius=(textBox.value - 32) * 5/9;
    result.innerHTML=`${textBox.value}°F is ${celcius.toFixed(2)}°C`;
 }
 else{
    result.textContent=`Please select a unit!`;
 }
 }
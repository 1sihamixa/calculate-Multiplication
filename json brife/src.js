let nmrOne = document.getElementById("input1");
let nmrTwo = document.getElementById("input2");
let result = document.getElementById("res");
let p = document.getElementById("docresult");
let hist = document.getElementById("history");
let obj = {};
console.log(obj);
result.addEventListener("click",function(){
   p.innerHTML = `${Number(nmrOne.value)*Number(nmrTwo.value)}`;
   obj[`${nmrOne.value}*${nmrTwo.value}`]=p.innerHTML;
   let jav = JSON.stringify(obj);
   localStorage.setItem("Data",jav);
});
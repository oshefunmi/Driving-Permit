
const ageElem = document.getElementById("age");
const submitElem = document.getElementById("submit");
const resultOutput = document.getElementById("result");


function convertage(age){
    let result = "";

    if(age <=80  && age >=18){
        result = "User Is Eligible To Drive.";
    }else{
        result = "Not Eligible To Drive.";
    } 
    return result;      
}

submitElem.addEventListener("click", ()=>{
    let age = ageElem.value;
    let result = convertage(age);
    resultOutput.innerText = result;
}
);

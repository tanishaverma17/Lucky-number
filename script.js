const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const CheckNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");  
const canvas = document.querySelector('#canvas');

const jsConfetti = new JSConfetti()

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText = "Your Birthday is lucky🎉";
        jsConfetti.addConfetti()
    }
    else{
        outputBox.innerText = "Your Birthday is not lucky😢";
    }
}

function checkBirthdayIsLucky(){
    const date = dateOfBirth.value;
    const sum = calculateSum(date);
    if( sum && date){
        compareValues(sum, luckyNumber.value)
    }
    else{
       outputBox.innerText = "Please enter both the fields😒" 
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

CheckNumberButton.addEventListener("click", checkBirthdayIsLucky);

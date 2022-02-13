//generate pin button interactive
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById("secret-pin").value = pin;
}

// interactive calculator

document.getElementById("calc-digit").addEventListener("click", function(event){

    const calcInput = event.target.innerText;
    const typedNumbers = document.getElementById("typed-numbers");
    if(isNaN(calcInput)){
        if(calcInput == "C"){
            typedNumbers.value = "";
        }
    }
    else{
        const previousNumber = typedNumbers.value;
        const newNumber = previousNumber + calcInput;
        typedNumbers.value = newNumber;
    }
})
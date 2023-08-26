// btn Genarate Pin function
function GenaratePin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin+'';
    
    if(pinString.length == 4){
        const submiteInput = document.getElementById('input-genarate');
        submiteInput.value = pinString;
    }
    else{
        alert('not 4 digit');
        GenaratePin();
    }
}


// submite section
document.getElementById('digit-container').addEventListener('click',function(event){
    const currentNumber = event.target.innerText;
    
    const inputSubmite = document.getElementById('submite-input');
    if (isNaN(currentNumber)){
        
        if (currentNumber.toLowerCase() == 'c'){
            inputSubmite.value = ''
        }
        else if (currentNumber == '<'){
            alert('Not Working')
        }
    }

    else {
    const previusNumber = inputSubmite.value;
    const newNumber = previusNumber + currentNumber;
    inputSubmite.value = newNumber;
    }
    
})


//  submite btn 
document.getElementById('btn-submite').addEventListener('click',function(){
    // input frield
     const inputGenarate = document.getElementById('input-genarate').value;
     const inputSubmite = document.getElementById('input-submite').value;
     
    //error message text 
    const matchText = document.getElementById('match-text');
    const notMatchText = document.getElementById('not-match-text');

     if(inputGenarate == inputSubmite) {
        matchText.style.display = 'block';
        notMatchText.style.display = 'none';
     }
     else{
        notMatchText.style.display = 'block';
        matchText.style.display = 'none';
     }
})
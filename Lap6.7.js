function minNumberTask(input){

    let index = 0;
    let currentInput = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (currentInput !== "Stop"){
        let currentNumber = Number(currentInput);

        if(currentNumber < minNumber){
            minNumber = currentInput;
        }
        index++;
        currentInput = input[index];
    }
    
    console.log(minNumber);

}

minNumberTask (["100","99","80","70","Stop"])

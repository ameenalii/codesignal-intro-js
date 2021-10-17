function allLongestStrings(inputArray) {
    for(var i = 0; i < inputArray.length; i++){
        var currentvalue = inputArray[0].length;
        if(inputArray[i].length > currentvalue){
            inputArray.splice(i-1,1);
            i=0;
            }
        else if(inputArray[i].length < currentvalue){
        inputArray.splice(i,1);
        i=0;
        }
    }
    return inputArray;
}
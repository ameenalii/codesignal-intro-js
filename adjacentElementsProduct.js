function adjacentElementsProduct(inputArray) {
    var b = inputArray[0]*inputArray[1];
    for(let i=0;i< inputArray.length;i++)
        if((inputArray[i]*inputArray[i+1])>b) 
            b = inputArray[i]*inputArray[i+1];
    return b;
}

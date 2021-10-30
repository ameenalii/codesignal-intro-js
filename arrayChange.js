function arrayChange(inputArray) {
    var count =0;
    for(var i=1;i<inputArray.length;i++){
        while(inputArray[i]<=inputArray[i-1]){
            count++;
            inputArray[i]++;
        }
    }
    return count
}

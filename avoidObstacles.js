function avoidObstacles(inputArray) {
    var maxO = Math.max(...inputArray);   
    for(var i=1;i<=maxO+1;i++){
        if(inputArray.every((element)=>{
            return element % i != 0 ;
        })){
            return i;
        }
    }
}

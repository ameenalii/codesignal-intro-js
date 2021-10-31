function arrayMaximalAdjacentDifference(inputArray) {
    var m=[];
    
    for(var i=1;i<inputArray.length;i++){
        m.push(Math.abs(inputArray[i]-inputArray[i-1]));
    }
    console.log(m)
    var x=m[0];
    for(var i=1;i<m.length;i++){
        if(x<m[i]){x=m[i]};
        
    }
    return x
}

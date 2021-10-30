function palindromeRearranging(inputString) {
    var counteven=[], countodd=[];
    var c=0;
    var d=0;
   if(inputString.length == 1) return true; //okay
    for(var i=0;i<inputString.length;i++){
        var counter=0;
        
        for(var j=0;j<inputString.length;j++){
            if(inputString[i]==inputString[j])
                
                counter++;
        }
        counter==1 ? countodd.push(counter) : counteven.push(counter);
    }
    console.log(countodd)
    console.log(counteven)
    
    // for(var i=0;i<inputString.length;i++){
    //     if( counteven[i] % 2 != 0 ) c++;
    // }
    
    // for(var i=0;i<inputString.length;i++){
    //     if( counteven[i] % 2 != 0 ){
    //         console.log(c/counteven[i])
    //         d=c/counteven[i];
    //         break;
    //     }
    // }
    // console.log(d)
     
    for(var i=0;i<inputString.length;i++){
        if( counteven[i] % 2 == 0 && countodd.length<2) d++;
        else c++;
    }  
     var end;
     for(var i=0;i<inputString.length;i++){
        if( counteven[i] % 2 != 0 && countodd.length<2) {
             end = c/counteven[i]; 
            if(end == 1) return true
            
                                                        break;}
         else end = 1
    } 
    // console.log(end)
    // setTimeout(function(){ }, 500);
    if(d == counteven.length&& countodd.length<2 )return true;
    else return false
}

// else return false
// return true; 
// d==1||c==0
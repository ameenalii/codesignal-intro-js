function almostIncreasingSequence(sequence) {
    var remove = 0;
    for(var i=0; i<sequence.length-2;i++){    
        var first = sequence[i];
        var next  = sequence[i+1];
        var last  = sequence[i+2];
        if(first>=next){ 
            remove++;
            sequence[i]=next-1;
        }
        if(next>=last){
            remove++;
                if(first==last){sequence[i+2]=next+1;}
                else{sequence[i+1] = first;}   
        }    
    }             
    if(remove>1){return false;}
    else{ return true;}
}


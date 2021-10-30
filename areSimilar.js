function areSimilar(a, b) {
    var count =0,x=0;
    var newArrayA=[] , newArrayB=[];
    for(var i=0;i<a.length;i++){
        if(a[i]==b[i]) count++ ;
        else{            
            newArrayA[x]=a[i];
            newArrayB[x]=b[i];
            x++;
        }
    }
    if(count == a.length) return true;
    else if(count == a.length-2 && newArrayA[0] == newArrayB[1] && newArrayA[1] == newArrayB[0])                    return true;
    else return false;}

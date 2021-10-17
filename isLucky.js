function isLucky(n) {
    num = n.toString();
    a = num.split('');
    var sum1 = 0;
    var sum2 = 0;
    if(a.length %2 == 0){
        for(var i=0;i<a.length/2;i++){
            sum1+=parseInt(a[i],10);  
        }
         for(var j=a.length/2;j<a.length;j++){
            sum2+=parseInt(a[j],10);  
        }
        if(sum1 == sum2){return true}
        else{return false}
    }
    else{return false;}
}

function addBorder(picture) {
    var a="";
    var sol = [];
    for(var i=0;i<picture[0].length+2;i++){ a+="*" }
    sol[0] = a;
    sol[picture.length+1] = a;
    console.log(picture.length+1)
    for(var i=0;i<picture.length+2;i++){
           
        if(i==0 || i==picture.length+1) continue;
        sol[i] = "*"+picture[i-1]+"*"
    }
    
    return sol;
}

function alternatingSums(a) {
    var x=0,y=0;
    for(var i=0; i<a.length;i++){
        i%2 == 0 ? x+=a[i]:y+=a[i];
    }
    var num=[x,y];
    return num;

}

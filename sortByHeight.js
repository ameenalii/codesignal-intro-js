function sortByHeight(a) {
    //var max = a[0];
    var temp;
    for(var i=0;i<a.length;i++){
        for(var j=0;j<a.length;j++){
            if(a[i] != -1){
            if(a[i] < a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }}
            
    }}
        return a;
}

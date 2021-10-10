function matrixElementsSum(matrix) {
    var s=0;
    for(var i=0;i<matrix.length;i++) {
        for(var j = 0; j<matrix[i].length;j++){
              
    
    if(matrix[i][j] == 0){for(var d = i; d<matrix.length;d++){matrix[d][j] = 0;}}
    //{if(i!=matrix[i].length){matrix[i][j] = 0;}}
    
}}


    for(var i=0;i<matrix.length;i++) {
        for(var j = 0; j<matrix[i].length;j++){
            
            s+=matrix[i][j]
            
        }}
        return s
        }
/*
if(matrix[i][j]==0);
if(matrix[i+1][j]=0);

*/
function isIPv4Address(inputString) {
    var count =0;
    reg=/^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;
    var res = reg.test(inputString);
    if(res){
        var s=inputString.split(".")
    
        for(var i=0;i<s.length;i++){
            if(s[i]<256 && s[i]>=0)count++
        }
        if(count==4) return true
        else return false
    }
    else return false;
        
}


// if(parseInt(inputString.slice(0, 3)) >= 0 && parseInt(inputString.slice(0, 3)) <= 255) count++
//     if(parseInt(inputString.slice(4, 7)) >= 0 && parseInt(inputString.slice(0, 3)) <= 255) count++
//     if(parseInt(inputString.slice(0, 3)) >= 0 && parseInt(inputString.slice(0, 3)) <= 255) count++
//     if(parseInt(inputString.slice(0, 3)) >= 0 && parseInt(inputString.slice(0, 3)) <= 255) count++

// var str = "The best things in life are free";
//   var patt = new RegExp("e");
//   var res = patt.test(str);


//     for(var i=0;i<inputString.lrngth;i+=4){
//         for(var j=0;j<3;j++){
    // inputString[]
               // console.log(parseInt(inputString.slice(0, 3)))

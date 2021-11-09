function alphabeticShift(inputString) {

    let alphabet = ['a', 'b' ,'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    inputString =inputString.split("")
    for(var i=0;i<inputString.length;i++){
        var index=0;
        if(inputString[i] != 'z'){
            index=alphabet.indexOf(inputString[i])+1;
        }
        inputString[i]=alphabet[index]
    }
    return inputString.join("")
}

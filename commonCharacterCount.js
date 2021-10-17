function commonCharacterCount(s1, s2) {
    let str1 = s1.split('');
    let str2 = s2.split('');
    let count = 0;
    for(let i = 0;i<str1.length;i++){
        for(let j = 0;j<str2.length;j++){
            if (str1[i] == str2[j] ){
                count += 1;
                delete str2[j];
                break;
            }
        }
    }
    return count;
}

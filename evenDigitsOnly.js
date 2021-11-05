function evenDigitsOnly(n) {

    var odd_count = 0
    while (n > 0){
        var rem = n % 10;
        if (rem % 2 != 0) odd_count++;
        n = parseInt(n / 10) ;
    }
    if (odd_count== 0) return true;
    else return false;
}

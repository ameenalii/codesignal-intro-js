function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    // if (yourLeft+yourRight == friendsLeft+friendsRight) return true
    if(yourLeft == friendsLeft || yourLeft == friendsRight){
        if(yourRight == friendsLeft || yourRight == friendsRight){
            return true
        }
        else return false
    }
    else return false
}

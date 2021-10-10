function makeArrayConsecutive2(statues) {
    var statues ;
    var max = Math.max(...statues);
    var min = Math.min(...statues);
    var difference = (max - min);
    var n = (difference - statues.length) + 1;
    return n;
}

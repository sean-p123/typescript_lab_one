function str_len(value) {
    return value.length;
}
console.log(str_len("test 1"));
function str_length_spaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.log(str_length_spaces("Test 1"));
function str_len_both(value, spaces) {
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log(str_len_both("Test 1"));

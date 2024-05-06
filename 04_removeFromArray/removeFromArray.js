const removeFromArray = function(arr, ...num) {
    //arr.splice(arr.indexOf(num), 1);
    //return arr;
    return arr.filter(val => !num.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;

const repeatString = function(word, num) {
    let neww = '';
    if(num < 0){
        return 'ERROR';
    }
    for(let i = 0; i < num; i++){
        neww += word;
    }
    
    return neww;
};

// Do not edit below this line
module.exports = repeatString;

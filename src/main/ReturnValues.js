
const returnValues =  (currentOperation, values) => {
    switch (currentOperation) {
        case '+' : values[0] = values[0] + values[1];
        break;
        case '-' : values[0] = values[0] - values[1];
        break;
        case '*' : values[0] = values[0] * values[1];
        break;
        default : values[0]= values[1] !== 0 ? values[0] / values[1] : 'Err!!!!';
    }
    return values[0];
};

module.exports = returnValues;
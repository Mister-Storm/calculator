import React, { Component } from 'react';
import './Calculator.css';
import Button from '../Components/Button'
import Display from '../Components/Display'
import ReturnValues from './ReturnValues'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {
    
    state = {...initialState};

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({...initialState}); 

    }

    setOperation(operation) {
        if(this.state.current === 0) {
            this.setState({operation, current:1, clearDisplay:true});
        } else {
            const returnValues = ReturnValues;
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = {...this.state.values};
            values[0] = values[0] === 'Err!!!!' ? 0 : values[0];
            values[0] = returnValues(currentOperation, values);
            values[1] = 0;
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: equals,
                values
            });
        }
    }

    addDigit(num) {
        if(num ==='.' && this.state.displayValue.includes('.')) {
            return;
        }
        const clearDisplay = ((this.state.displayValue==='0' && num !=='.') 
        || this.state.displayValue==='Err!!!!'
        || this.state.clearDisplay);
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + num;
        this.setState({displayValue, clearDisplay:false});
        if(num !== '.') {
            const i = this.state.current;
            const values = {...this.state.values};
            values[i] = parseFloat(displayValue);
            this.setState({values});
        }
    }

    render () {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label ="AC" click={this.clearMemory} triple />
                <Button label ="/" click={this.setOperation} operation/>
                <Button label ="7" click={this.addDigit} />
                <Button label ="8" click={this.addDigit} />
                <Button label ="9" click={this.addDigit} />
                <Button label ="*" click={this.setOperation} operation/>
                <Button label ="4" click={this.addDigit} />
                <Button label ="5" click={this.addDigit} />
                <Button label ="6" click={this.addDigit} />
                <Button label ="-" click={this.setOperation} operation/>
                <Button label ="1" click={this.addDigit} />
                <Button label ="2" click={this.addDigit} />
                <Button label ="3" click={this.addDigit} />
                <Button label ="+" click={this.setOperation} operation/>
                <Button label ="0" click={this.addDigit} double />
                <Button label ="." click={this.addDigit} />
                <Button label ="=" click={this.setOperation} operation/>
            </div>
        )
    }
}


let returnValues = require('./ReturnValues');

describe("calculator", () => {

    describe("sum test", () =>{
        // eslint-disable-next-line no-unused-expressions
        it('given_operato_+_when_the_numbers_3_and_6_then_return_9', () => {
            expect(returnValues('+', [3, 6])).toBe(9);
        })
    });

    describe("subtraction test", () =>{
        // eslint-disable-next-line no-unused-expressions
        it('given_operato_-_when_the_numbers_10_and_6_then_return_4', () => {
            expect(returnValues('-', [10, 6])).toBe(4);
        })
    });

    describe("multiplication test", () =>{
        // eslint-disable-next-line no-unused-expressions
        it('given_operato_*_when_the_numbers_3_and_6_then_return_18', () => {
            expect(returnValues('*', [3, 6])).toBe(18);
        })
    });

    describe("division test 1", () =>{
        // eslint-disable-next-line no-unused-expressions
        it('given_operato_/_when_the_numbers_12_and_6_then_return_2', () => {
            expect(returnValues('/', [12, 6])).toBe(2);
        })
    });

    describe("division test 2", () =>{
        // eslint-disable-next-line no-unused-expressions
        it('given_operato_/_when_the_divider_is_0_then_return_Err!!!!', () => {
            expect(returnValues('/', [3, 0])).toBe('Err!!!!');
        })
    });

});
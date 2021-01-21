const REMOVE_FUNCTION_OPERATOR = 'AC';
const NEGATIVE_FUNCTION_OPERATOR = '±';
const PERSENT_FUNCTION_OPERATOR = '%';

const MEMORY_CLEAR = 'mc';
const MEMORY_READ = 'mr';
const MEMORY_PLUS = 'm+';
const MEMORY_MINUS = 'm-';

function ButtonContent(content, type = '') {
    this.content = content;
    this.type = type;
}

export const actionButtons = [
    new ButtonContent(REMOVE_FUNCTION_OPERATOR, 'function'),
    new ButtonContent(NEGATIVE_FUNCTION_OPERATOR, 'function'),
    new ButtonContent(PERSENT_FUNCTION_OPERATOR, 'function'),
    new ButtonContent('/', 'operator'),
    new ButtonContent(MEMORY_CLEAR, 'memory'),
    new ButtonContent(MEMORY_READ, 'memory'),
    new ButtonContent(MEMORY_MINUS, 'memory'),
    new ButtonContent(MEMORY_PLUS, 'memory-plus'),
    new ButtonContent('7'),
    new ButtonContent('8'),
    new ButtonContent('9'),
    new ButtonContent('x', 'operator'),
    new ButtonContent('4'),
    new ButtonContent('5'),
    new ButtonContent('6'),
    new ButtonContent('-', 'operator'),
    new ButtonContent('1'),
    new ButtonContent('2'),
    new ButtonContent('3'),
    new ButtonContent('+', 'operator'),
    new ButtonContent('0'),
    new ButtonContent('.'),
    new ButtonContent('=', 'equals')
];

export const actionOperator = (operator, value, memoryValue) => {
    const parsedValue = parseFloat(value);
    const parsedMemoryValue = parseFloat(memoryValue);
    switch (operator) {
        case '+':
            return parsedValue + parsedMemoryValue;
        case '-':
            return parsedMemoryValue - parsedValue;
        case '/':
            return parsedMemoryValue / parsedValue;
        case 'x':
            return parsedMemoryValue * parsedValue;
        default:
            return '';
    }
};

export const functionOperators = (operator, value) => {
    const parsedValue = parseFloat(value);
    switch (operator) {
        case REMOVE_FUNCTION_OPERATOR:
            return '';
        case NEGATIVE_FUNCTION_OPERATOR:
            return parsedValue * -1;
        case PERSENT_FUNCTION_OPERATOR:
            return parsedValue / 100;
    }
};

export const memoryOperators = (operator, value, saver, setValue, setSaver) => {
    switch (operator) {
        case MEMORY_CLEAR:
            setSaver('');
            break;
        case MEMORY_READ:
            setValue(saver);
            break;
        case MEMORY_PLUS:
            setSaver(value);
            setValue('');
            break;
        case MEMORY_MINUS:
            setSaver((value * -1).toString());
            break;
    }
};

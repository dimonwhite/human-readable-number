const numbers = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
}

module.exports = function toReadable (number) {
    let string;

    number = number.toString();

    switch (true) {
        case ( number == 0 ): {
            return 'zero';
            break;
        }
        case ( number >= 100 ): {
            string = numbers[number[0]] + ' hundred';
            let temp = (number % 100).toString();

            if( temp > 20 ) {
                string += ` ${numbers[temp[0] + '0']}`;

                if( temp % 10 ) {
                    string += ` ${numbers[temp % 10]}`;
                }
            }
            else {
                string += temp > 0 ? ` ${numbers[temp]}` : '';
            }
            break;
        }
        case ( number > 20 ): {
            string = numbers[number[0] + '0']

            if( number % 10 ) {
                string += ` ${numbers[number % 10]}`;
            }
            break;
        }
        default: {
            string = numbers[number];
        }
    }

    return string;
}

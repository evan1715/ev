/**
 * @typedef {import('../utils/bodyConverter').body} body
 */
const bodyConverter = require('../utils/bodyConverter');

/*============================================
                Fruit Bearers
==============================================*/

//Powdered fruit
const banana = (title, body) => console.log(`%c${title}`, 'color: yellow', bodyConverter(body));
const blueberry = (title, body) => console.log(`%c${title}`, 'color: blue', bodyConverter(body));
const cherror = (title, body) => console.log(`%c${title} error:`, 'color: red', bodyConverter(body));
const cherry = (title, body) => console.log(`%c${title}`, 'color: red', bodyConverter(body));
const grape = (title, body) => console.log(`%c${title}`, 'color: magenta', bodyConverter(body));
const lime = (title, body) => console.log(`%c${title}`, 'color: lime', bodyConverter(body));
const orange = (title, body) => console.log(`%c${title}`, 'color: orange', bodyConverter(body));
const pear = (title, body) => console.log(`%c${title}`, 'color: green', bodyConverter(body));
const plum = (title, body) => console.log(`%c${title}`, 'color: purple', bodyConverter(body));
const teal = (title, body) => console.log(`%c${title}`, 'color: cyan', bodyConverter(body));
//Chalky fruit
const bgBanana = (title, body) => console.log(`%c${title}`, 'background-color: yellow', bodyConverter(body));
const bgBlueberry = (title, body) => console.log(`%c${title}`, 'background-color: blue', bodyConverter(body));
const bgCherror = (title, body) =>
    console.log(`%c${title} error:`, 'background-color: red', bodyConverter(body));
const bgCherry = (title, body) => console.log(`%c${title}`, 'background-color: red', bodyConverter(body));
const bgGrape = (title, body) =>
    console.log(`%c${title}%c`, 'background-color: magenta', bodyConverter(body));
const bgLime = (title, body) => console.log(`%c${title}`, 'background-color: lime', bodyConverter(body));
const bgOrange = (title, body) =>
    console.log(`%c${title}%c`, 'background-color: orange', bodyConverter(body));
const bgPear = (title, body) => console.log(`%c${title}`, 'background-color: green', bodyConverter(body));
const bgPlum = (title, body) => console.log(`%c${title}`, 'background-color: purple', bodyConverter(body));
const bgTeal = (title, body) => console.log(`%c${title}`, 'background-color: cyan', bodyConverter(body));

module.exports = {
    banana,
    blueberry,
    cherror,
    cherry,
    grape,
    lime,
    orange,
    pear,
    plum,
    teal,
    bgBanana,
    bgBlueberry,
    bgCherror,
    bgCherry,
    bgGrape,
    bgLime,
    bgOrange,
    bgPear,
    bgPlum,
    bgTeal,
};

/**
 * @typedef {import('../utils/bodyConverter.js').body} body
 */
import bodyConverter from '../utils/bodyConverter.js';

/*============================================
                Fruit Bearers
==============================================*/

//Powdered fruit
/** @param {string} title @param {body} [body] */
const banana = (title, body) => console.log(`%c${title}`, 'color: yellow', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const blueberry = (title, body) => console.log(`%c${title}`, 'color: blue', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const cherror = (title, body) => console.log(`%c${title} error:`, 'color: red', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const cherry = (title, body) => console.log(`%c${title}`, 'color: red', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const grape = (title, body) => console.log(`%c${title}`, 'color: magenta', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const lime = (title, body) => console.log(`%c${title}`, 'color: lime', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const orange = (title, body) => console.log(`%c${title}`, 'color: orange', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const pear = (title, body) => console.log(`%c${title}`, 'color: green', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const plum = (title, body) => console.log(`%c${title}`, 'color: purple', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const teal = (title, body) => console.log(`%c${title}`, 'color: cyan', bodyConverter(body));

//Chalky fruit
/** @param {string} title @param {body} [body] */
const bgBanana = (title, body) => console.log(`%c${title}`, 'background-color: yellow', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgBlueberry = (title, body) => console.log(`%c${title}`, 'background-color: blue', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgCherror = (title, body) =>
    console.log(`%c${title} error:`, 'background-color: red', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgCherry = (title, body) => console.log(`%c${title}`, 'background-color: red', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgGrape = (title, body) =>
    console.log(`%c${title}%c`, 'background-color: magenta', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgLime = (title, body) => console.log(`%c${title}`, 'background-color: lime', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgOrange = (title, body) =>
    console.log(`%c${title}%c`, 'background-color: orange', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgPear = (title, body) => console.log(`%c${title}`, 'background-color: green', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgPlum = (title, body) => console.log(`%c${title}`, 'background-color: purple', bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgTeal = (title, body) => console.log(`%c${title}`, 'background-color: cyan', bodyConverter(body));

export {
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

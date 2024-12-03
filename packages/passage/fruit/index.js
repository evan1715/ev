/**
 * @typedef {import('../utils/bodyConverter.js').body} body
 */
import * as colors from './colors.js';
import bodyConverter from '../utils/bodyConverter.js';

const orangeHex = colors.orange;

/*============================================
                Fruit Bearers
==============================================*/

//Powdered fruit
/** @param {string} title @param {body} [body] */
const banana = (title, body) => console.log(colors.banana(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const blueberry = (title, body) => console.log(colors.blueberry(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const cherror = (title, body) => console.log(colors.cherror(title, 'error:'), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const cherry = (title, body) => console.log(colors.cherry(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const grape = (title, body) => console.log(colors.grape(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const lime = (title, body) => console.log(colors.lime(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const orange = (title, body) => console.log(orangeHex(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const pear = (title, body) => console.log(colors.pear(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const plum = (title, body) => console.log(colors.plum(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const teal = (title, body) => console.log(colors.teal(title), bodyConverter(body));

//Chalky fruit
/** @param {string} title @param {body} [body] */
const bgBanana = (title, body) => console.log(colors.bgBanana(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgBlueberry = (title, body) => console.log(colors.bgBlueberry(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgCherror = (title, body) => console.log(colors.bgCherror(title, 'error:'), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgCherry = (title, body) => console.log(colors.bgCherry(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgGrape = (title, body) => console.log(colors.bgGrape(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgLime = (title, body) => console.log(colors.bgLime(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgOrange = (title, body) => console.log(orangeHex(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgPear = (title, body) => console.log(colors.bgPear(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgPlum = (title, body) => console.log(colors.bgPlum(title), bodyConverter(body));
/** @param {string} title @param {body} [body] */
const bgTeal = (title, body) => console.log(colors.bgTeal(title), bodyConverter(body));

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

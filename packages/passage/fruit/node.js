/**
 * @typedef {import('../utils/bodyConverter').body} body
 * @typedef {import('chalk').Chalk} Chalk
 */
/** @type {Chalk} */
const chalk = require('chalk');
const colors = require('./colors');
const bodyConverter = require('../utils/bodyConverter');

chalk.level = 2;

const orangeHex = colors.orange;

/*============================================
                Fruit Bearers
==============================================*/

//Powdered fruit
/** @param {string} title @param {body} body */
const banana = (title, body) => console.log(chalk.yellow(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const blueberry = (title, body) => console.log(chalk.blue(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const cherror = (title, body) => console.log(chalk.red(title, 'error:'), bodyConverter(body));
/** @param {string} title @param {body} body */
const cherry = (title, body) => console.log(chalk.red(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const grape = (title, body) => console.log(chalk.magenta(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const lime = (title, body) => console.log(chalk.greenBright(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const orange = (title, body) => console.log(orangeHex(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const pear = (title, body) => console.log(chalk.green(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const plum = (title, body) => console.log(chalk.magentaBright(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const teal = (title, body) => console.log(chalk.cyan(title), bodyConverter(body));

//Chalky fruit
/** @param {string} title @param {body} body */
const bgBanana = (title, body) => console.log(chalk.bgYellow(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgBlueberry = (title, body) => console.log(chalk.bgBlue(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgCherror = (title, body) => console.log(chalk.bgRed(title, 'error:'), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgCherry = (title, body) => console.log(chalk.bgRed(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgGrape = (title, body) => console.log(chalk.bgMagenta(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgLime = (title, body) => console.log(chalk.bgGreenBright(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgOrange = (title, body) => console.log(orangeHex(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgPear = (title, body) => console.log(chalk.bgGreen(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgPlum = (title, body) => console.log(chalk.bgMagentaBright(title), bodyConverter(body));
/** @param {string} title @param {body} body */
const bgTeal = (title, body) => console.log(chalk.bgCyan(title), bodyConverter(body));

module.exports = {
    //Chalks
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

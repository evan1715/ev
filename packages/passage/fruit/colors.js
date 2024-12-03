import chalk from 'chalk';

chalk.level = 2;

const {
    yellow,
    blue,
    red,
    magenta,
    greenBright,
    green,
    magentaBright,
    cyan,
    bgYellow,
    bgBlue,
    bgRed,
    bgMagenta,
    bgGreenBright,
    bgGreen,
    bgMagentaBright,
    bgCyan,
} = chalk;

const orange = chalk.hex('#FFA500');
const bgOrange = chalk.bgHex('#FFA500');

export {
    yellow as banana,
    blue as blueberry,
    red as cherror,
    red as cherry,
    magenta as grape,
    greenBright as lime,
    green as pear,
    orange,
    magentaBright as plum,
    cyan as teal,
    bgYellow as bgBanana,
    bgBlue as bgBlueberry,
    bgRed as bgCherror,
    bgRed as bgCherry,
    bgMagenta as bgGrape,
    bgGreenBright as bgLime,
    bgOrange,
    bgGreen as bgPear,
    bgMagentaBright as bgPlum,
    bgCyan as bgTeal,
};

# @1715/passage

A utility to give ease of access to general functions and can be applicable to multiple projects.

## Console logging

### Purpose
The purpose to the colored console logging is to make using browser logging and chalk easier while providing options to create even stronger or clearer console logs. Chalk will allow chalk.yellow('string') but if we want to log anything else or separate it like a normal console log, it must be called again. Instead, using rememberable fruit to either give the option of regular chalk with passage.banana('yellow') or additional passage.lime(200, 'success'). The cherror option also adds the word 'error' in the string to indicate it's an error being called, separating the red as a title/location and the white body as the actual error.

### Usage
* If you are accessing from a browser, you must indicate on the import that the fruit bearers will be in the browser instead of a Node console. Ex: import passage from '@1715/passage/browser';
* If you do not want to import the whole package, and only want logging in a file, select '@1715/passage/fruit/browser';
* For regular Node consoles, regular '@1715/passage' will work.
* The first argument passed will be what's in color while the second one will be in plain text. Ex: passage.banana('yellow text', 'non-yellow text');

### Methods
* .banana();
* .blueberry();
* .cherror(); -- this method will print (firstArg +'error:' +' ' +secondArg)
* .cherry();
* .grape();
* .lime();
* .orange();
* .pear();
* .plum();
* .teal();

* .bgBanana();
* .bgBlueberry();
* .bgCherror(); -- this method will print (firstArg +'error:' +' ' +secondArg)
* .bgCherry();
* .bgGrape();
* .bgLime();
* .bgOrange();
* .bgPear();
* .bgPlum();
* .bgTeal();
const crypto = require('crypto'); // CommonJS module system to import, built-in nodejs module

const start = Date.now(); 
crypto.pbkdf2('secret', 'somesaltvalue', 100000, 512, 'sha512', () => {
    console.log("1:", Date.now() - start);
});

crypto.pbkdf2('secret', 'somesaltvalue', 100000, 512, 'sha512', () => {
    console.log("2:", Date.now() - start);
});

crypto.pbkdf2('secret', 'somesaltvalue', 100000, 512, 'sha512', () => {
    console.log("3:", Date.now() - start);
});

crypto.pbkdf2('secret', 'somesaltvalue', 100000, 512, 'sha512', () => {
    console.log("4:", Date.now() - start);
});

crypto.pbkdf2('secret', 'somesaltvalue', 100000, 512, 'sha512', () => {
    console.log("5:", Date.now() - start);
});

crypto.pbkdf2('secret', 'somesaltvalue', 100000, 512, 'sha512', () => {
    console.log("6:", Date.now() - start);
});
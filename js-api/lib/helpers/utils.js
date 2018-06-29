"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Auto generated password length */
exports.generatedPasswordLength = 12;
/*
 * "Secure" password generator
 *  from: https://github.com/PaulLaux/eth-hot-wallet/blob/master/app/utils/crypto.js
*/
function generateString(len) {
    var MAXLEN = len; /* tweak this */
    var MINLEN = len;
    function genString() {
        var array = new Uint8Array(MAXLEN);
        window.crypto.getRandomValues(array);
        array = Array.apply([], array); /* turn into non-typed array */
        array = array.filter(function (x) { return (x > 32 && x < 127); });
        /* strip non-printables: if we transform into desirable range we have a propability bias, so I suppose we better skip this character */
        return String.fromCharCode.apply(String, array); // eslint-disable-line
    }
    var tmp = genString();
    while (tmp.length < MINLEN) {
        /* unlikely too loop more than once.. */
        tmp += genString();
    }
    return tmp.substr(0, len);
}
exports.generateString = generateString;
//# sourceMappingURL=utils.js.map
/* Auto generated password length */
export const generatedPasswordLength = 12;
/*
 * "Secure" password generator
 *  from: https://github.com/PaulLaux/eth-hot-wallet/blob/master/app/utils/crypto.js
*/
export function generateString(len) {
    const MAXLEN = len; /* tweak this */
    const MINLEN = len;
    function genString() {
        let array = new Uint8Array(MAXLEN);
        window.crypto.getRandomValues(array);
        array = Array.apply([], array); /* turn into non-typed array */
        array = array.filter((x) => (x > 32 && x < 127));
        /* strip non-printables: if we transform into desirable range we have a propability bias, so I suppose we better skip this character */
        return String.fromCharCode.apply(String, array); // eslint-disable-line
    }
    let tmp = genString();
    while (tmp.length < MINLEN) {
        /* unlikely too loop more than once.. */
        tmp += genString();
    }
    return tmp.substr(0, len);
}
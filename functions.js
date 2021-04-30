var bcu = require('bigint-crypto-utils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var bcu__namespace = /*#__PURE__*/_interopNamespace(bcu);

async function generateRandomKeys(bitlength = 3072) {
    let p, q, n, g;
    // if p and q are bitLength/2 long ->  2**(bitLength - 2) <= n < 2**(bitLength)
    do {
        p = await bcu__namespace.prime(Math.floor(bitlength / 2) + 1);
        q = await bcu__namespace.prime(Math.floor(bitlength / 2));
        n = p * q;
    } while (q === p || bcu__namespace.bitLength(n) !== bitlength);
    g = (p - 1n) * (q - 1n);
    return {publicKey: n, privateKey: {pk: n, sk: g}}
}

function encrypt( publicKey, m, r ){
    const pk = BigInt(publicKey)
    console.log( pk )
    if (r === undefined) {
        do {
            r = bcu__namespace.randBetween(pk);
        } while (bcu__namespace.gcd(r, pk) !== 1n);
    }
    const n2 = pk ** 2n;
    return (bcu__namespace.modPow( 1n + pk, m, n2) * bcu__namespace.modPow(r, pk, n2)) % n2;

}

function decrypt( privateKey, c ){
    return ((( bcu__namespace.modPow(c, privateKey.sk) - 1n) / privateKey.pk) * bcu__namespace.modInv(privateKey.sk, privateKey.pk) % privateKey.pk);
}

module.exports = {
    generateRandomKeys,
    encrypt,
    decrypt
}
const paillierBigint = require('paillier-bigint')

const createExample = async () => {
    const { publicKey, privateKey } = await paillierBigint.generateRandomKeys(3072);
    
    console.log( publicKey, privateKey);

    const m1 = 68719476736n;
    const m2 = 16777216n;
    const m3 = 4096n;
    const m4 = 1n;

    const c1 = publicKey.encrypt(m1);
    const c2 = publicKey.encrypt(m2);
    const c3 = publicKey.encrypt(m3);
    const c4 = publicKey.encrypt(m4);

    const suma = m1+m2+m3+m4;
    console.log( suma );
    const mult = c1*c2*c3*c4;
    console.log( mult );
    console.log( privateKey.decrypt(mult) );
}

createExample();
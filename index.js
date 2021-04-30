const paillierBigint = require('paillier-bigint')

const createExample = async () => {
    const { publicKey, privateKey } = await paillierBigint.generateRandomKeys(14, true);
    
    console.log( privateKey );
    
    const m1 = 4096n;
    const m2 = 256n;
    const m3 = 16n;
    const m4 = 1n;
    const m5 = 16n;

    console.log({m1,m2,m3,m4, m5});
    
    const c1 = publicKey.encrypt(m1);
    const c2 = publicKey.encrypt(m2);
    const c3 = publicKey.encrypt(m3);
    const c4 = publicKey.encrypt(m4);
    const c5 = publicKey.encrypt(m5);

    console.log({c1,c2,c3,c4,c5});

    const suma = m1+m2+m3+m4+m5;
    console.log( "suma mensajes: "+suma );
    const mult = c1*c2*c3*c4*c5;
    console.log( "multiplicacion de las cifras: "+mult );
    console.log( "multiplicacion descifrada: "+privateKey.decrypt(mult) );
    console.log( "multiplicacion descifrada binario: "+ Number(privateKey.decrypt(mult)).toString(2) );
}

createExample();
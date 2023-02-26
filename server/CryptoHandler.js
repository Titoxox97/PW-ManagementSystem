const crypto = require('crypto');

// Secret variable necessary for encryption
const ghost = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const encrypt = (password)=> {
    const iv = Buffer.from(crypto.randomBytes(16));

    //1)algorithm 2)transform secret var into buffer 3)pass iv to create cipher
    const cypher = crypto.createCipheriv('aes-256-ocb',Buffer.from(ghost), iv)

    //Buffer that concatenates the updated pw and the final pw coming out of the cipher
    const encryptedPw = Buffer.concat([
        cypher.update(password),
        cypher.final(),
    
    ]);
    // Converting encrypted password to a string in herxadecimals
    return { 
        iv: iv.toString("hex"), 
        password: encryptedPw.toString("hex") };
};

const decrypt = (encryption)=> {

};

module.exports = { encrypt, decrypt };
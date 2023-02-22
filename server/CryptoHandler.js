const crypto = require('crypto');

// Secret variable necessary for encryption
const ghost = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const encrypt = (password)=> {
    const iv = Buffer.from(crypto.randomBytes(16));
    //1)algorithm 2)transform secret var into buffer 3)pass iv to create cipher
    const cypher = crypto.createCipheriv('aes-256-ocb',Buffer.from(ghost), iv)
};

const decrypt = (encryption)=> {

};

module.exports = { encrypt, decrypt };
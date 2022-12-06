const crypto = require('crypto');
const encrypt = {};

encrypt.encriptar = (pass) => {
    return crypto.createHash('sha256').update(pass).digest('hex');
}

module.exports = encrypt;

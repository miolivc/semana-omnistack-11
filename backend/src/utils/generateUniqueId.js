const crypto = require('crypto');

const generateUniqueId = () => crypto.randomBytes(4).toString('HEX');

module.exports = generateUniqueId; 
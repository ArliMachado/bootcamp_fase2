require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  passHash: process.env.PASS_HASH,
  expiresIn: '7d',
};

//Set up environment variables here
const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {};
const test = {};

const config = {
 dev,
 test
};

module.exports = config[env];
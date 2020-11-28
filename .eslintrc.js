const defaultCOnfig = require('./config/eslintrc');

module.exports = {
    ...defaultCOnfig,
    rules: {
        ...defaultCOnfig.rules,
        '@typescript-eslint/no-var-requires': 'off'
    }
};

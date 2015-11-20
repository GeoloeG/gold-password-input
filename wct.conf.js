module.exports = {
  verbose: true,
  plugins: {
    local: {
      browsers: ['google-chrome', 'firefox']
    },
    sauce: {
      disabled: true,
      browsers: []
    }
  }
};

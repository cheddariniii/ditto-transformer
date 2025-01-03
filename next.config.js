module.exports = {
  env: {
    MESHY_API_KEY: process.env.MESHY_API_KEY
  },
  pageExtensions: ['js', 'jsx', 'html'],
  webpack(config) {
    config.module.rules.push({
      test: /\.html$/,
      loader: 'html-loader'
    });
    return config;
  }
}
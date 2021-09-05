module.exports = {
  pwa: {
    name: 'Cloudy',
    themeColor: '#00647d',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'GenerateSW'
  },
  devServer: {
    proxy: "http://localhost:80"
  }
}

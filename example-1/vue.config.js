const path = require('path');

module.exports = {
    transpileDependencies: [
    ],
    css: {
        loaderOptions: {
            scss:  {
                data: `@import "@/styles/_globalStyles.scss";`
            }
        }
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    }
}
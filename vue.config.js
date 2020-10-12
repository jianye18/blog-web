module.exports = {
    // 在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath
    publicPath: "/blog/", //1.默认为 "/":部署在一个域名的根路径上  ; 2. "./":所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
    outputDir: "dist"
}
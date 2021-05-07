const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use("/signup", 
        proxy({
            target: "http://192.168.254.106:3002",
            changeOrigin: true
        })
    );

    app.use("/signin", 
    proxy({
        target: "http://192.168.254.106:3002",
        changeOrigin: true
    })
);

    app.use("/reset-password", 
    proxy({
        target: "http://192.168.254.106:3002",
        changeOrigin: true
})
);
  

//     app.use("/newpassword", 
//     proxy({
//         target: "http://192.168.254.100:5000",
//         changeOrigin: true
// })
// );

};
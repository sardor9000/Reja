const http = require("http");
const mongodb = require("mongodb");

const connectionString = "mongodb+srv://NEO98:onajon98@cluster0.hrkcrv5.mongodb.net/Reja";

mongodb.connect(connectionString, {
    userNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;

        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 7000;
        server.listen(PORT, function() {
        console.log(`The server is successfully on port: ${PORT}, http://localhost:${PORT}`);
});


    }
});





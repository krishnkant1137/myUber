const http = require("http");
const app = require("./app");
const post = process.env.PORT || 1137;

const server = http.createServer(app);

server.listen(1137, () => console.log("server is running or port 1137"));
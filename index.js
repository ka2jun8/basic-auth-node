const http = require("http");
const basicAuth = require("basic-auth");
const userInfo = {
  name: "test@example.com",
  pass: "test",
};

function authMiddleware(req, res) {
  const credentials = basicAuth(req);
  if(!credentials || !check(credentials.name, credentials.pass)) {
    res.statusCode = 401;
    res.end("Invalid username or password");
  } else {
    res.end("success login");
  }
}

function check(name, pass) {
  if(userInfo.name === name && userInfo.pass === pass) {
    return true;
  }
  return false;
}

const server = http.createServer(authMiddleware);
server.listen(1234);
console.log("basic auth server start");

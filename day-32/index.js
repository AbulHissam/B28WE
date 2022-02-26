const http = require("http");
const fs = require("fs");
const port = 8000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let time = new Date();
    fs.writeFile(
      `DateTime/${time.toDateString()}.txt`,
      time.toLocaleTimeString(),
      (err) => {
        if (err) console.log(err);
        else {
          fs.readFile(`DateTime/${time.toDateString()}.txt`, (err, data) => {
            res.write(data);
            res.end();
          });
        }
      }
    );
  })
  .listen(port, () => {
    console.log("Server is up and running on port", port);
  });

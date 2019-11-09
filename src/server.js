var restify = require('restify');

var server = restify.createServer();
server.get(`/hello/:name`, (req, res, next) => {
  res.send(`hello, ${req.params.name}!`);
  next();
});
server.listen(process.env.PORT, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
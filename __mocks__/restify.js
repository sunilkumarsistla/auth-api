class Server {
  constructor() {
    this.name = 'restify';
    this.get = jest.fn();
    this.post = jest.fn();
    this.patch = jest.fn();
    this.delete = jest.fn();
    this.put = jest.fn();
    this.listen = jest.fn((port, cb) => {
      this.url = `http://[::]:${port}`;
      cb();
    });
  }
}

const restify = {
  createServer: jest.fn().mockImplementation(() => new Server()),
};

module.exports = restify;

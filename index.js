const build = require('./app');
const {
  server: { port, host }
} = require('config');

const start = async () => {
  if (require.main === module) {
    const app = await build();
    app.listen(port, host, error => {
      if (error) {
        app.log.error(error);
        // eslint-disable-next-line unicorn/no-process-exit
        process.exit(1);
      }
    });
    exports.app = app;
  }
};

start();

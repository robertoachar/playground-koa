const app = require('./app');
const config = require('./config');
const logger = require('./logger');

app.listen(config.PORT, () => {
  Object.keys(config).map((key) => logger.info(`${key}: ${config[key]}`));
});

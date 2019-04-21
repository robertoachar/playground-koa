const logger = require('./logger');

const error = async (ctx, next) => {
  return next().catch((err) => {
    logger.error(`${err.name} - ${err.message}`);

    switch (err.name) {
      case 'Whoops':
        ctx.status = 422;
        ctx.body = err.message;
        break;

      default:
        ctx.status = 500;
        break;
    }
  });
};

module.exports = error;

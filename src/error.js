const logger = require('./logger');

const error = async (ctx, next) => {
  return next().catch((err) => {
    logger.error(`${err.name} - ${err.message}`);

    switch (err.name) {
      case 'Error':
        ctx.status = 422;
        ctx.body = { message: err.message };
        break;

      default:
        ctx.status = 500;
        ctx.body = { message: 'Something is broken' };
    }
  });
};

module.exports = error;

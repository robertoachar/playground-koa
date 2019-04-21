const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');

const error = require('./error');
const router = require('./router');

const app = new Koa();
app.use(helmet());
app.use(bodyParser());
app.use(error);
app.use(router.routes());

module.exports = app;

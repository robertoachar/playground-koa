const Koa = require('koa');
const helmet = require('koa-helmet');

const router = require('./router');

const app = new Koa();
app.use(helmet());
app.use(router.routes());

module.exports = app;

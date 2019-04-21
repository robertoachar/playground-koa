const KoaRouter = require('koa-router');

const router = KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa';
});

router.get('/json', async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

module.exports = router;

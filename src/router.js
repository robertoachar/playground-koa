const KoaRouter = require('koa-router');

const router = KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa';
});

module.exports = router;

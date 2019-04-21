const KoaRouter = require('koa-router');

const router = KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa';
});

router.get('/json', async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

router.post('/hello', async (ctx) => {
  const { name } = ctx.request.body;

  ctx.body = { message: `Hello ${name}` };
});

router.get('/error', async () => {
  const error = new Error();
  error.name = 'Whoops';
  error.message = 'Whoops error message';

  throw error;
});

module.exports = router;

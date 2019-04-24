const KoaRouter = require('koa-router');

const router = KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa';
});

router.get('/json', async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

router.get('/user/:id', async (ctx) => {
  const { id } = ctx.params;

  ctx.body = { id };
});

router.post('/hello', async (ctx) => {
  const { name } = ctx.request.body;

  ctx.body = { message: `Hello ${name}` };
});

router.get('/throw', async () => {
  throw new Error('BOOM!');
});

router.get('/error', async (ctx) => {
  const value = undefined;

  ctx.body = value.toString();
});

export default router;

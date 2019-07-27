const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'This is project-b';

});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
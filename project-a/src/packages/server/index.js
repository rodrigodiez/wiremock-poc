const Koa = require('koa');
const app = new Koa();
const request = require('request-promise');

const url = 'http://api:8080';


app.use(async ctx => {
  response = await request(url);
  ctx.body = `This is what I see when requesting to ${url}: ${response}`;
});

app.listen(3000);
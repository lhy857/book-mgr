const Koa = require('koa');

const koaBody = require('koa-body');

const { connect } = require('./db')

const registerRoutes = require('./routers');

const cors = require('@koa/cors');

const app = new Koa();

connect().then(() => {
    app.use(cors());

    app.use(koaBody());

    registerRoutes(app);

    app.listen(3000, () => {
        console.log('启动成功');
    });
});





// const authRouter = new Router({
//     prefix: '/auth'                                      // prefix 表示前缀
// });

// authRouter.get('/register', async (ctx) => {
//     ctx.body = '注册成功';
// });

// const bookRouter = new Router({
//     prefix: '/book'                                     
// });

// app.use(authRouter.routes());
// app.use(bookRouter.routes());

// bookRouter.get('/add', async (ctx) =>{
//     ctx.body = '添加成功';
// });
//context = ctx
// app.use((ctx) => {
//     console.log(ctx.URL);
// });

// 通过app.use  注册中间件
// 中间件本质上 他就是一个函数
// context  上下文   当前请求的相关信息都在里面

// app.use((context) => {
//     // const { request } = context;
//     //对 request 进行重命名
//     const { request:req } = context; 
//     // 对象的解构
//     // const request = context.request; == const { request } = context;
//     const { url } = req;
//     if (url === '/user') {
//         context.response.body = '<h1>主页</h1>';   // 等价于   context.body = 'abcde'

//         return;
//     }

//     // 路由
//     if (url === '/user/list') {
//         context.body = '<h1>用户列表</h1>';

//         return;
//     }

//     context.body = '404';
// });

// 开启一个http服务
// 接收 http 请求  并做处理  ，处理完成后响应


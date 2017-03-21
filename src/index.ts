/**
 * テストサーバ
 */
import * as os from "os";
import * as process from "process";
import * as Koa from "koa";
import * as Pug from "koa-pug";
import * as Router from "koa-router";
import * as serve from "koa-static";
import * as moment from 'moment';

const app = new Koa();

/**
 * router
 */
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());

/**
 * pug pass
 */
const pug = new Pug({
    app: app,
    viewPath: "./dist/views",
    basedir: "./dist/views"
});

/**
 * public pass
 */
app.use(serve(__dirname + '/public'));

/**
 * routing
 */
router.get("/", async (ctx, next) => {
    await next();
    ctx.render("index", {name: "TEST"});
});

/**
 * プロセス起動
 */
const port = process.env.PORT || 3000;
const server = app.listen(port);

console.log(`listening ${port}`);

/**
 * socket.io 
 */
import * as SocketIO from "socket.io";
const io = SocketIO(server);

io.on('connection', (socket) => {
    let count = 0;
    setInterval(() => {
        count += 1;
        let rand = Math.floor( Math.random() * 4 );
        let num = count % rand;
        let now = moment().format("YYYY/MM/DD HH:mm:ss");
        socket.emit("new_message", {
            label: count,
            flag: num,
            content: now,
        });
    }, 3000);
});
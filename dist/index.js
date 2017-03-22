"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
const Koa = require("koa");
const Pug = require("koa-pug");
const Router = require("koa-router");
const serve = require("koa-static");
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
    basedir: "./dist/views",
    pretty: true
});
/**
 * public pass
 */
app.use(serve(__dirname + '/public'));
/**
 * routing
 */
router.get("/", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    yield next();
    ctx.render("index", { name: "TEST" });
}));
/**
 * プロセス起動
 */
const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`listening ${port}`);
/**
 * socket.io
 */
const SocketIO = require("socket.io");
const io = SocketIO(server);
io.on('connection', (socket) => {
    let count = 0;
    setInterval(() => {
        count += 1;
        let rand = Math.floor(Math.random() * 4);
        let num = count % rand;
        let now = new Date();
        socket.emit("new_message", {
            label: count,
            flag: num,
            content: now,
        });
    }, 3000);
});
//# sourceMappingURL=index.js.map
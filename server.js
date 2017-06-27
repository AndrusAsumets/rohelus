const Koa = require('koa')
let app = new Koa()
const serve = require('koa-static')
var http = require('http')
var https = require('https')
let router = require('koa-router')()
var bodyParser = require('koa-bodyparser')
var cors = require('koa-cors')
var fs = require('fs')

const PORT = process.env.PORT || 80

router.get('/',
    async function(next) {
        console.log('GET: /index.html')
        this.body = fs.readFileSync(__dirname + '/index.html', 'utf8')
    }
)

router.get('/developer.html',
    async function(next) {
        console.log('GET: /developer.html')
        this.body = fs.readFileSync(__dirname + '/developer/_site/index.html', 'utf8')
    }
)

app.use(bodyParser())
app.use(cors())
app.use(router.routes())
app.use(serve('.'))

app.listen(PORT)

console.log('Server is listening on', PORT + '.')
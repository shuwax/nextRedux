const next = require('next');
const express = require('express');
const { parse } = require('url')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const app = next({dev:'production'});

const handle = app.getRequestHandler()


app.prepare().then(()=>{
    const server = express();

    server.use(morgan('dev'))
    server.use(cookieParser());

    server.get('/', (req, res) => {
        const actualPage = '/'
        return app.render(req, res, actualPage)
    })

    server.get('*', (req, res) => {
        return handle(req,res)
    })

    server.listen(3000,err => {
        if(err) throw err;
        console.log('Server ssr is running on port: 3000' )
    })
})

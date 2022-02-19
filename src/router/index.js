const commentRouter = require('./comment')
const authRouter = require('./auth')
const homeRouter = require('./home')
function route(app) {
    app.use('/comment', commentRouter)
    app.use('/auth', authRouter)
    app.use('/', homeRouter)
}

module.exports = route
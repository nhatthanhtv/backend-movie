
class HomeController {
    index(req, res, next) {
        res.send('Xin chào v1.2')
    }
}

module.exports = new HomeController
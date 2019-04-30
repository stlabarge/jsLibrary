module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*'); //origin - client
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-requested-With, Content-Type, Accept, Authorization');

    next();
}
const logRequestTime = (req, res, next) => {
    const date = new Date();
    return res.json({ Time: `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}` });
    next();
};

module.exports = logRequestTime;

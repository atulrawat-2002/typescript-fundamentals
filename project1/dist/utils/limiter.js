const map = new Map();
const timeWindow = 60 * 60 * 1000;
const maxLimit = 3;
function limiter(req, res, next) {
    console.log(map);
    if (map.has(req.ip)) {
        let [time, limit] = map.get(req.ip);
        let currentTime = new Date().getTime();
        let timePassed = currentTime - time;
        if (timePassed >= timeWindow) {
            map.set(req.ip, [new Date().getTime(), 1]);
            next();
            return;
        }
        else if (timePassed < timeWindow) {
            if (limit === maxLimit) {
                res.json({
                    message: 'You have reached your limit'
                });
                return;
            }
            else if (limit < maxLimit) {
                let [prevTime, count] = map.get(req.ip);
                map.set(req.ip, [prevTime, ++count]);
                next();
            }
        }
    }
    else {
        map.set(req.ip, [new Date().getTime(), 1]);
        next();
    }
}
export default limiter;
//# sourceMappingURL=limiter.js.map
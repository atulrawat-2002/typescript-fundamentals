const LIMIT = 5;
const map = new Map();
const timeWindow = 60 * 60 * 1000;


//  cleanup
setInterval(() => {
    const now = Date.now();

    for (const [ip, [startTime]] of map.entries()) {
        if (now - startTime >= timeWindow) {
            map.delete(ip);
        }
    }
}, timeWindow);

// @ts-ignore
export function limiter(req, res, next) {
    
    if (map.has(req.ip)) {
        let reqTime = map.get(req.ip)[0];
        let timePassed = new Date().getTime() - reqTime;
        let reqLimit = map.get(req.ip)[1];

        if(timePassed >= timeWindow) {
            map.set(req.ip, [new Date().getTime(), 1]);
            next();
            return;

        } else if(timePassed < timeWindow) {
            if(reqLimit === LIMIT) {
                res.json({
                    message: 'Your have reached your limit'
                })
                return;

            } else {
                map.set(req.ip, [reqTime, reqLimit + 1]);
                next();
                return;
            }
        }

    } else {
        map.set(req.ip, [new Date().getTime(), 1]);
        next();
    }

}
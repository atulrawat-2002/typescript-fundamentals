import os from "os";
import cluster from "cluster";
import express from "express";
import morgan from "morgan";
const totalCPUs = os.cpus().length;
console.log(os.cpus());
if (cluster.isPrimary) {
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });
}
else {
    const app = express();
    app.use(morgan("common"));
    app.get('/', (req, res) => {
        res.set('Connection', 'close');
        res.json({
            message: `Hello from server ${process.pid}`
        });
    });
    app.listen(8000, () => {
        // console.log("App is listening on port no. 8000")
    });
}
//# sourceMappingURL=index.js.map
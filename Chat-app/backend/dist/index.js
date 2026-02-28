import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
// array of that interface ,store the data which socket connectino belongs to wh
const allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        // @ts-ignore
        console.log(JSON.parse(message));
        // @ts-ignore
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            console.log("user joined room", parsedMessage.payload.roomId);
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        else if (parsedMessage.type === "chat") {
            console.log("User wants to chat");
            let currentRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i]?.socket === socket) {
                    currentRoom = allSockets[i]?.room;
                }
            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i]?.room === currentRoom) {
                    allSockets[i]?.socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
//# sourceMappingURL=index.js.map
import { WebSocketServer, WebSocket } from "ws";


const wss = new WebSocketServer({ port: 8080 });
// create a web socket server to listern for the connections



// A user interface for a socke and which room it belongs to 
interface User {
    socket: WebSocket,
    room: string
}

// array of that interface ,store the data which socket connectino belongs to wh
const allSockets: User[] = [];

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
            })

        } else if (parsedMessage.type === "chat") {
            console.log("User wants to chat")
            let currentRoom = null;

            for (let i = 0; i < allSockets.length; i++ ) {
                if (allSockets[i]?.socket === socket) {
                    currentRoom = allSockets[i]?.room;
                }
            }

            for(let i = 0; i < allSockets.length; i++ ) {
                if(allSockets[i]?.room === currentRoom) {
                    allSockets[i]?.socket.send(parsedMessage.payload.message);
                }
            }
        }
    })
})
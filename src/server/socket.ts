import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export async function onSocket(socket:Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) {
    console.log('connected', socket.id)
}
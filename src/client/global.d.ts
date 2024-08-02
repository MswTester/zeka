import { io, Socket } from "socket.io-client";

declare global {
  interface Window {
    io: typeof io;
  }
}

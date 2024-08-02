import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { readFileSync } from 'fs';
import frida from 'frida';
import { Client } from 'adb-ts'
import { exec } from 'child_process';
import { onSocket } from './socket';

const app = express()
const server = createServer(app)
const io = new Server(server)

const dirname = path.dirname(path.dirname(__dirname))
app.use(express.static(path.join(dirname, 'public')))
app.use(express.json())
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'public', 'index.html'))
})

io.on('connection', onSocket)

const PORT:number = 3000
server.listen(PORT, () => {
    console.log(`[*] Server running on 127.0.0.1:${PORT} in ${process.env.NODE_ENV} mode`)
    const isDev = process.env.NODE_ENV === 'development'
    if(!isDev) exec(`start http://127.0.0.1:${PORT}`)
})

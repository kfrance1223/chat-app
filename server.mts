
import express from 'express';
import next from 'next';
import http from 'http';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new Server(httpServer)

  try {
      io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      });

      server.all('*', (req, res) => {
        return handle(req, res);
      });
      httpServer.listen(3000, () => {
        console.log('> Ready on http://localhost:3000');
      });
  }
    catch (error) {
        console.error('Error starting server:', error);
    }
});


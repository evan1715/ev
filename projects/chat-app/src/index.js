import http from 'node:http';
import path from 'node:path';
import express from 'express';
import { Filter } from 'bad-words';
import { Server } from 'socket.io';
import { generateLocationMessage, generateMessage } from './utils/messages.js';
import { addUser, getUser, getUsersInRoom, removeUser } from './utils/users.js';

const PORT = 3000;
const __dirname = import.meta.dirname;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
    console.log('New WebSocket connection.');

    socket.on('join', (params, callback) => {
        //socket.id is socketIO's unique identifier for a user. Params will hold username & room.
        const { error, user } = addUser({ id: socket.id, ...params });

        if (error) {
            return callback(error);
        }

        //Officially join the room
        socket.join(user.room);

        socket.emit('message', generateMessage('Admin', 'Welcome!'));
        socket.broadcast
            .to(user.room)
            .emit('message', generateMessage('Admin', `${user.username} has joined!`));
        io.to(user.room).emit('roomInfo', {
            room: user.room,
            users: getUsersInRoom(user.room),
        });

        //Calling callback to let the user know they were able to join.
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter();
        const user = getUser(socket.id);

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed');
        }

        io.to(user.room).emit('message', generateMessage(user.username, message));
        callback();
    });

    socket.on('sendLocation', (coords, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit(
            'locationMessage',
            generateLocationMessage(
                user.username,
                `https://bing.com/maps?q=${coords.latitude},${coords.longitude}`
            )
        );
        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left the room.`));
            io.to(user.room).emit('roomInfo', {
                room: user.room,
                users: getUsersInRoom(user.room),
            });
        }
    });
});

server.listen(PORT, () => {
    console.log('Server is up on port ' + PORT + '.');
});

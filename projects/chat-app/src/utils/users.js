/**
 * @typedef {object} UserObj
 * @property {string} id
 * @property {string} room
 * @property {string} username
 */

/** @type {UserObj[]} */
const users = [];

/** @param {UserObj} user */
const addUser = ({ id, room, username }) => {
    let user = { id: '', room: '', username: '' };
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    if (!username || !room) {
        return { user, error: 'Username and room are required!' };
    }

    const existingUser = users.find((user) => user.room === room && user.username === username);

    if (existingUser) {
        return { user, error: 'Username is in use!' };
    }

    user = { id, username, room };
    users.push(user);
    return { user, error: '' };
};

/** @param {string|undefined} id */
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

/** @param {string} id */
const getUser = (id) => users.find((user) => user.id === id) ?? { id: '', username: '', room: '' };
/** @param {string} room */
const getUsersInRoom = (room) => users.filter((user) => user.room === room.trim().toLowerCase());

export { addUser, removeUser, getUser, getUsersInRoom };

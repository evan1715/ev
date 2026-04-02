/**
 * @param {object} user
 * @param {string} [token]
 */
const loginAction = (user, token) => {
    if (token) {
        return {
            type: 'LOGIN',
            user: {
                user: user,
                token: token,
            },
        };
    }

    if (user.token) {
        localStorage.setItem('token', user.token);

        return {
            type: 'LOGIN',
            user: {
                user: user.user,
                token: user.token,
            },
        };
    }
};

/** @param {string} token */
const logoutAction = (token) => ({
    type: 'LOGOUT',
    token: token,
});

/** @param {object} profile */
const getUserAction = (profile) => ({
    type: 'GET_USER',
    user: profile,
});

/**
 * @param {object} user
 * @param {string} token
 */
const updateUserAction = (user, token) => ({
    type: 'UPDATE_USER',
    user: user,
    token: token,
});

/** @param {string} icon */
const getIconAction = (icon) => ({
    type: 'GET_USER_ICON',
    icon: icon,
});

/** @param {object} [user] */
const deleteUserIconAction = (user) => ({
    type: 'DELETE_USER_ICON',
    user: user,
});

export { loginAction, logoutAction, getUserAction, updateUserAction, getIconAction, deleteUserIconAction };

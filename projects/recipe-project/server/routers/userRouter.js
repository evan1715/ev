/**
 * User router module.
 * Handles: create account, login, logout, profile management, and icon operations.
 * @module routers/userRouter
 */
import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import auth from '../middleware/authentication.js';
import User from '../models/userModel.js';

const router = express.Router();

//Create an account & Log in with token.
router.post('/user', async (req, res) => {
    const user = new User(req.body);

    try {
        const token = await user.createToken();

        await user.save();
        res.status(201).send({ user: user, token: token });
    } catch (error) {
        res.status(400).send(error);
    }
});

//Log in a user.
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.loginUser(req.body.email, req.body.password);
        const token = await user.createToken();

        res.send({ user: user, token: token });
    } catch (_e) {
        const error = 'Unable to login.';
        res.status(400).send({ error });
    }
});

//Log out a user.
router.post('/user/logout', auth, async (req, res) => {
    try {
        //Filter tokens to log out of this specific location.
        req.user.loginTokens = req.user.loginTokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send();
    } catch (_error) {
        res.status(500).send();
    }
});

//Log out of all locations.
router.post('/user/logoutAll', auth, async (req, res) => {
    try {
        //Set the tokens to an empty array to rid them all.
        req.user.loginTokens = [];
        await req.user.save();
        res.send();
    } catch (_error) {
        res.status(500).send();
    }
});

//Get username by id.
router.get('/user/username/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const username = user.username;

        res.send({ username });
    } catch (_error) {
        res.status(500).send();
    }
});

//View profile.
router.get('/user/me', auth, async (req, res) => {
    res.send(req.user);
});

//Get a user without the login process. View their profile.
router.get('/user/profile/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.send(user);
    } catch (_error) {
        res.status(500).send();
    }
});

//Update a user.
router.patch('/user/profile', auth, async (req, res) => {
    //We'll use Object.keys(req.body) in order to convert an object into an array of its properties.
    const updates = Object.keys(req.body);
    const validUpdates = updates.every((update) => {
        return ['username', 'email', 'previousPassword', 'password', 'name'].includes(update);
    });

    if (!validUpdates) {
        return res.status(400).send('Update not valid.');
    }

    try {
        //Check for valid previous password before changing to new password
        if (updates.includes('previousPassword') && updates.includes('password')) {
            await User.loginUser(req.body.email, req.body.previousPassword);
            delete updates.previousPassword;
        }

        updates.forEach((update) => {
            //Use bracket notation to access a property dynamically.
            req.user[update] = req.body[update];
        });

        await req.user.save(); //middleware used
        res.send(req.user);
    } catch (errors) {
        const error = 'Invalid current password.';
        if (errors.message === 'Unable to login.') {
            res.status(400).send({ error });
        } else {
            res.status(400).send(errors);
        }
    }
});

//Delete a user.
router.delete('/user/profile', auth, async (req, res) => {
    try {
        await req.user.deleteOne();
        res.send(req.user);
    } catch (_error) {
        res.status(500).send();
    }
});

//Multer upload configuration for user profile icons.
const upload = multer({
    limits: { fileSize: 1000000 },
    fileFilter(_req, file, callback) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|bmp|gif)$/)) {
            return callback(new Error('Unsupported image file type.'));
        }
        //If file is good, null, true to accept file.
        callback(undefined, true);
    },
});

// Upload a user's profile icon.
router.post(
    '/user/profile/icon',
    auth,
    upload.single('icon'),
    async (req, res) => {
        try {
            req.user.icon = await sharp(req.file.buffer)
                .resize({ width: 250, height: 250 })
                .jpeg()
                .toBuffer();

            await req.user.save();
            res.send();
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },
    (error, _req, res, _next) => {
        res.status(400).send({ error: error.message });
    }
);

// Get a user's profile icon by user id.
router.get('/user/:id/icon', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user || !user.icon) {
            throw new Error('None found.');
        }

        res.set('Content-Type', 'image/jpeg');

        res.send(user.icon);
    } catch (_error) {
        res.status(404).send();
    }
});

//Delete a user's profile icon.
router.delete('/user/profile/icon', auth, async (req, res) => {
    try {
        req.user.icon = null;
        await req.user.save();
        res.send();
    } catch (_error) {
        res.status(500).send();
    }
});

export default router;

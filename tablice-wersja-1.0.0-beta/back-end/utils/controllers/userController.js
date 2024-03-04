import User from '../models/UserModel.js';
import { checkResourceExists } from '../utils/checkResourceExists.js';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';

export const userController = {
    login: async (req, res, next) => {
        try {
            const { login = '', email = '', password } = req.body;
            const user = await User.findOne({
                where: { [Op.or]: [{ email }, { login }] },
            });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            console.log(`Password provided by user: ${password}`);
            console.log(`Hashed password in database: ${user.password()}`);

            bcrypt.compare(password, user.password(), (err, match) => {
                if (err) {
                    console.log(`Error during password comparison: ${err}`);
                    return next(err);
                }

                console.log(`Password match result: ${match}`);

                if (match) {
                    const token = user.generateAuthToken();
                    res.cookie('token', token);
                    res.status(200).json({
                        message: 'Login successful',
                        token: token,
                    });
                } else {
                    res.status(400).json({ message: 'Invalid password' });
                }
            });
        } catch (err) {
            console.log(`Error during login: ${err}`);
            next(err);
        }
    },

    index: async (_req, res, next) => {
        try {
            res.json(await User.findAll());
        } catch (err) {
            next(err);
        }
    },

    showUser: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(User, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await User.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const user = await checkResourceExists(User, req.params.id);
            await user.update(req.body);
            res.json({ message: 'Update succeeded' });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const user = await checkResourceExists(User, req.params.id);
            await user.destroy();
            res.json({ message: 'Deletion succeeded' });
        } catch (err) {
            next(err);
        }
    },
};

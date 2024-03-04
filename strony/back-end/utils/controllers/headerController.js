import Header from "../models/HeaderModel.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";

export const headerController = {
    index: async (_req, res, next) => {
        try {
            res.json(await Header.findAll());
        } catch (err) {
            next(err);
        }
    },

    showHeader: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(Header, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await Header.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const header = await checkResourceExists(Header, req.params.id);
            await header.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const header = await checkResourceExists(Header, req.params.id);
            await header.destroy();
            res.json({ message: "Deletion succeeded" });
        } catch (err) {
            next(err);
        }
    },
};

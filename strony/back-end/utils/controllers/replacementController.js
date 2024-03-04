import Replacement from "../models/ReplacementModel.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";

export const replacementController = {
    index: async (_req, res, next) => {
        try {
            res.json(await Replacement.findAll());
        } catch (err) {
            next(err);
        }
    },

    showReplacement: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(Replacement, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await Replacement.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const replacement = await checkResourceExists(
                Replacement,
                req.params.id
            );
            await replacement.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const replacement = await checkResourceExists(
                Replacement,
                req.params.id
            );
            await replacement.destroy();
            res.json({ message: "Deletion succeeded" });
        } catch (err) {
            next(err);
        }
    },
};

import HiddenSection from "../models/HiddenSections.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";

export const hiddenSectionController = {
    index: async (_req, res, next) => {
        try {
            res.json(await HiddenSection.findAll());
        } catch (err) {
            next(err);
        }
    },

    showHiddenSection: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(HiddenSection, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await HiddenSection.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const hiddenSection = await checkResourceExists(
                HiddenSection,
                req.params.id
            );
            await hiddenSection.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const hiddenSection = await checkResourceExists(
                HiddenSection,
                req.params.id
            );
            await hiddenSection.destroy();
            res.json({ message: "Deletion succeeded" });
        } catch (err) {
            next(err);
        }
    },
};

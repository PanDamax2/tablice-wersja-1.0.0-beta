import Information from "../models/InformationModel.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";

export const informationController = {
    index: async (_req, res, next) => {
        try {
            res.json(await Information.findAll());
        } catch (err) {
            next(err);
        }
    },

    showInformation: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(Information, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await Information.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const information = await checkResourceExists(
                Information,
                req.params.id
            );
            await information.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const information = await checkResourceExists(
                Information,
                req.params.id
            );
            await information.destroy();
            res.json({ message: "Deletion succeeded" });
        } catch (err) {
            next(err);
        }
    },
};

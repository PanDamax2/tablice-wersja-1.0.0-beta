import Slider from "../models/SliderModel.js";
import { checkResourceExists } from "../utils/checkResourceExists.js";

export const sliderController = {
    index: async (_req, res, next) => {
        try {
            res.json(await Slider.findAll());
        } catch (err) {
            next(err);
        }
    },

    showSlider: async (req, res, next) => {
        try {
            res.json(await checkResourceExists(Slider, req.params.id));
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            res.status(201).json(await Slider.create(req.body));
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const slider = await checkResourceExists(Slider, req.params.id);
            await slider.update(req.body);
            res.json({ message: "Update succeeded" });
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const slider = await checkResourceExists(Slider, req.params.id);
            await slider.destroy();
            res.json({ message: "Deletion succeeded" });
        } catch (err) {
            next(err);
        }
    },
};

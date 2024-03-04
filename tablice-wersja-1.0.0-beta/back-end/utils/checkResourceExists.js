export const checkResourceExists = async (model, id) => {
    const resource = await model.findByPk(id, {
        exclude: "password",
    });
    if (!resource) {
        let error = new Error(`${model.name} not found`);
        error.status = 404;
        throw error;
    }
    return resource;
};

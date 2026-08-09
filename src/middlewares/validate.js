const AppError = require("../errors/AppError");

const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      throw new AppError("Invalid request data", 400);
    }

    req.body = result.data;

    next();
  };
};

module.exports = validate;
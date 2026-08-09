// const AppError = require("../errors/AppError");

// const validate = (schema) => {
//   return (req, res, next) => {
//     const result = schema.safeParse(req.body);

//     if (!result.success) {
//       throw new AppError("Invalid request data", 400);
//     }

//     req.body = result.data;

//     next();
//   };
// };

// module.exports = validate;



const AppError = require("../errors/AppError");

const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      const error = new AppError("Validation failed", 400);

      error.errors = errors;

      throw error;
    }

    req.body = result.data;

    next();
  };
};

module.exports = validate;
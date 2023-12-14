import httpStatus from "http-status";

export const validationMiddleware = (schema, type) => {
  return async (req, res, next) => {
    const validationOptions = {
      abortEarly: false,
      allowAny: true,
      allowStripe: true,
    };
    try {
      // check if type is query, body or param
      if (type === "QUERY") {
        const value = await schema.validateAsync(req.query, validationOptions);
        req.query = value;
        next();
        return;
      }

      if (type === "PARAM") {
        const value = await schema.validateAsync(req.params, validationOptions);
        req.params = value;
        next();
        return;
      }

      const value = await schema.validateAsync(req.params, validationOptions);
      req.body = value;
      next();
    } catch (error) {
      const errors = [];
      error.details.forEach((err) => {
        errors.push(err.message);
      });

      res.status(httpStatus.BAD_REQUEST).json({
        error: "validation error",
        errors,
      });
    }
  };
};

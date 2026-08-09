const { z } = require("zod");

const createJobSchema = z.object({
  title: z.string().min(1),
  company: z.string().min(1),
  status: z.string().min(1),
});

module.exports = {
  createJobSchema,
};
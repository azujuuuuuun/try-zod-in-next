import { z } from "zod";

export const pageSchema = z
  .string()
  .optional()
  .default("1")
  .refine((v) => Number.isSafeInteger(Number(v)) && Number(v) > 0)
  .transform(Number);

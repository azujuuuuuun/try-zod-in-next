import type { ParsedUrlQuery } from "querystring";
import { querySchema, Query } from "./query";
import { ValidationError } from "@/application/error/validation-error";

export const validateQuery = (query: ParsedUrlQuery): Query => {
  try {
    return querySchema.parse(query);
  } catch (e) {
    throw new ValidationError("Validation Error");
  }
};

import type { GetServerSidePropsContext } from "next";
import { querySchema, Query } from "./query";
import { ValidationError } from "../../../app/error/validation-error";

export const validateQuery = (
  query: GetServerSidePropsContext["query"]
): Query => {
  try {
    return querySchema.parse(query);
  } catch (e) {
    throw new ValidationError("Validation Error");
  }
};

import { z } from "zod";
import { searchQuerySchema } from "./search-query";
import { pageSchema } from "./page";
import { sortSchema } from "./sort";

export const querySchema = z.object({
  q: searchQuerySchema,
  page: pageSchema,
  sort: sortSchema,
});

export type Query = z.infer<typeof querySchema>;

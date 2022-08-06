import { z } from "zod";
import { sortOption } from "@/model/search/sort";

export const sortSchema = z
  .union([
    z.literal(sortOption.new.value),
    z.literal(sortOption.recommend.value),
  ])
  .default("recommend");

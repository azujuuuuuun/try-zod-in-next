import { z } from "zod";

export const sortOption = {
  new: {
    value: "new",
    name: "新着",
  },
  recommend: {
    value: "recommend",
    name: "おすすめ",
  },
} as const;

export const sortSchema = z
  .union([
    z.literal(sortOption.new.value),
    z.literal(sortOption.recommend.value),
  ])
  .default("recommend");

export type Sort = z.infer<typeof sortSchema>;

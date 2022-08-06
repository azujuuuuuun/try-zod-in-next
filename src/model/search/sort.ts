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

export type Sort = keyof typeof sortOption;

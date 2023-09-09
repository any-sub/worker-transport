import { z } from "zod";

export const ResultUnitParser = z.object({
  title: z.string().max(250).nullish(),
  description: z.string().max(500).nullish(),
  url: z.string().url().max(2048).nullish(),
  image: z.string().url().max(2048).nullish(),
  hash: z.string().describe("Hashed version of the contents")
});

export type ResultUnit = z.infer<typeof ResultUnitParser>;

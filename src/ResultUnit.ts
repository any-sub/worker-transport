import { z } from "zod";

export const ResultUnitParser = z.object({
  title: z.string().nullish(),
  description: z.string().nullish(),
  url: z.string().url().nullish(),
  image: z.string().url().nullish(),
  hash: z.string().describe("Hashed version of the contents")
}).nullish();

export type ResultUnit = z.infer<typeof ResultUnitParser>;

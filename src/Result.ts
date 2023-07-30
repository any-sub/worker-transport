import { z } from "zod";
import { StateParser } from "./State";

export const ResultParser = z.object({
  matches: z.array(z.object({
    title: z.string().nullish(),
    image: z.string().url().nullish(),
    description: z.string().nullish(),
    url: z.string().url().nullish()
  })).nullish(),
  state: StateParser
});

export type Result = z.infer<typeof ResultParser>

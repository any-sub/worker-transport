import { z } from "zod";
import { StateParser } from "./State";

export const ResultParser = z.object({
  matches: z.array(z.object({
    title: z.string().optional(),
    image: z.string().url().optional(),
    description: z.string().optional(),
    url: z.string().url().optional()
  })).optional(),
  state: StateParser
});

export type Result = z.infer<typeof ResultParser>

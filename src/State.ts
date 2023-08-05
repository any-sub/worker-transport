import { z } from "zod";
import { ResultUnitParser } from "./ResultUnit";

export const StateParser = z.object({
  lastUpdated: z.date(),
  data: z.array(ResultUnitParser)
}).nullish();

export type State = z.infer<typeof StateParser>;

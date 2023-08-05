import { z } from "zod";
import { ResultUnitParser } from "./ResultUnit";

export const StateParser = z.object({
  lastUpdated: z.string().datetime(),
  data: z.array(ResultUnitParser)
});

export type State = z.infer<typeof StateParser>;

import { z } from "zod";
import { StateParser } from "./State";
import { ConsumeParser } from "./Consume";
import { ReportParser } from "./Report";

export const WorkType = z.enum(["http"]);
export const SourceType = z.enum(["html", "json"]);

export const SourceParser = z.object({
  type: SourceType,
  location: z.string()
});

export type Source = z.infer<typeof SourceParser>;

export const WorkParser = z.object({
  id: z.string().uuid(),
  type: WorkType,
  source: SourceParser,
  consume: ConsumeParser,
  report: ReportParser.nullish()
});

export type Work = z.infer<typeof WorkParser>;
import { z } from "zod";
import { StateParser } from "./State";

export const WorkType = z.enum(["http"]);
export const SourceType = z.enum(["html", "json"]);

export const LookupMode = z.enum(["css", "xpath", "regex", "all"]);

const LookupSettings = z.object({
  mode: LookupMode,
  value: z.string().optional()
});

const TextReportingSettings = z.object({
  match: z.instanceof(RegExp).optional(),
  template: z.string().optional()
});

export const WorkParser = z.object({
  id: z.string().uuid(),
  type: WorkType,
  source: z.object({
    type: SourceType,
    location: z.string()
  }),
  consume: z.object({
    lookup: z.object({
      container: LookupSettings,
      children: LookupSettings.optional()
    }).optional()
  }),
  currentState: StateParser,
  report: z.object({
    title: TextReportingSettings.optional(),
    image: LookupSettings.optional(),
    description: TextReportingSettings.optional(),
    url: z.union([LookupSettings, TextReportingSettings]).optional()
  }).optional()
});

export type Work = z.infer<typeof WorkParser>
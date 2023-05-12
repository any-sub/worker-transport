import { z } from "zod";
import { LookupSettingsParser } from "./Consume";

export const TextReportingSettings = z.object({
  match: z.instanceof(RegExp).optional(),
  template: z.string().optional()
});

export type TextReporting = z.infer<typeof TextReportingSettings>;

export const ReportParser = z.object({
  title: TextReportingSettings.optional(),
  image: LookupSettingsParser.optional(),
  description: TextReportingSettings.optional(),
  url: z.union([LookupSettingsParser, TextReportingSettings]).optional()
});

export type Report = z.infer<typeof ReportParser>;
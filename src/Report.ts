import { z } from "zod";

export const TextReportingSettings = z.object({
  match: z.instanceof(RegExp).optional(),
  template: z.string().optional()
});

export type TextReporting = z.infer<typeof TextReportingSettings>;

export const ReportParser = z.object({
  title: TextReportingSettings.optional(),
  image: TextReportingSettings.optional(),
  description: TextReportingSettings.optional(),
  url: TextReportingSettings.optional()
});

export type Report = z.infer<typeof ReportParser>;
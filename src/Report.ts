import { z } from "zod";

export const TextReportingSettings = z.object({
  match: z.string().nullish(),
  template: z.string().nullish()
});

export type TextReporting = z.infer<typeof TextReportingSettings>;

export const ReportParser = z.object({
  title: TextReportingSettings.nullish(),
  image: TextReportingSettings.nullish(),
  description: TextReportingSettings.nullish(),
  url: TextReportingSettings.nullish()
});

export type Report = z.infer<typeof ReportParser>;
import { z } from "zod";

export const LookupMode = z.enum(["css", "xpath", "regex", "all", "jsonpath"]);

export const LookupSettingsParser = z.object({
  mode: LookupMode,
  value: z.string()
});

export type LookupSettings = z.infer<typeof LookupSettingsParser>;

export const ConsumeReportPartsParser = z.object({
  title: LookupSettingsParser.optional(),
  image: LookupSettingsParser.optional(),
  description: LookupSettingsParser.optional(),
  url: LookupSettingsParser.optional()
});

export type ConsumeReportParts = z.infer<typeof ConsumeReportPartsParser>;

export const ConsumeParser = z.object({
  lookup: z.object({
    container: LookupSettingsParser,
    children: LookupSettingsParser.optional()
  }).optional(),
  parts: ConsumeReportPartsParser.optional()
});

export type Consume = z.infer<typeof ConsumeParser>;

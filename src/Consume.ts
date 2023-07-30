import { z } from "zod";

export const LookupMode = z.enum(["css", "xpath", "regex", "all", "jsonpath"]);

export const LookupSettingsParser = z.object({
  mode: LookupMode,
  value: z.string()
});

export type LookupSettings = z.infer<typeof LookupSettingsParser>;

export const ConsumeReportPartsParser = z.object({
  title: LookupSettingsParser.nullish(),
  image: LookupSettingsParser.nullish(),
  description: LookupSettingsParser.nullish(),
  url: LookupSettingsParser.nullish()
});

export type ConsumeReportParts = z.infer<typeof ConsumeReportPartsParser>;

export const ConsumeParser = z.object({
  lookup: LookupSettingsParser.nullish(),
  parts: ConsumeReportPartsParser.nullish()
});

export type Consume = z.infer<typeof ConsumeParser>;

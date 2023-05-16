import { z } from "zod";

export const LookupMode = z.enum(["css", "xpath", "regex", "all"]);

export const LookupSettingsParser = z.object({
  mode: LookupMode,
  value: z.string()
});

export type LookupSettings = z.infer<typeof LookupSettingsParser>;

export const ConsumeParser = z.object({
  lookup: z.object({
    container: LookupSettingsParser,
    children: LookupSettingsParser.optional()
  }).optional()
});

export type Consume = z.infer<typeof ConsumeParser>;

import { z } from "zod";
import { WorkId } from "./Work";

export const WorkErrorParser = z.object({
  id: WorkId.optional(),
  code: z.string(),
  message: z.string().optional()
});

export type WorkError = z.infer<typeof WorkErrorParser>

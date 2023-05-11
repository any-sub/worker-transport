import { z } from "zod";

export const WorkType = z.enum(["http"]);

export const WorkParser = z.object({
  id: z.string().uuid(),
  type: WorkType
});

export type Work = z.infer<typeof WorkParser>
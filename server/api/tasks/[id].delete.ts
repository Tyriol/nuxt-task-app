import { eq } from "drizzle-orm";
import { z } from "zod";
import db from "~/lib/db";
import { tasks } from "~/lib/db/schema";

const IdParamSchema = z.object({
  id: z.coerce.number(),
});

export default defineEventHandler(async (event) => {
  const result = await getValidatedRouterParams(event, IdParamSchema.safeParse);

  if (!result.success) {
    return sendError(
      event,
      createError({
        statusCode: 422,
        statusMessage: "Invalid id",
      })
    );
  }

  const deletedTask = await db.delete(tasks).where(eq(tasks.id, result.data.id)).returning();

  if (!deletedTask) {
    return sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage: "Task not found",
      })
    );
  }

  return deletedTask;
});

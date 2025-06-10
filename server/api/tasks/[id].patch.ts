import db from "~/lib/db";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { PatchTasksSchema, tasks } from "~/lib/db/schema";

const IdParamSchema = z.object({
  id: z.coerce.number(),
});

export default defineEventHandler(async (event) => {
  const resultId = await getValidatedRouterParams(event, IdParamSchema.safeParse);
  const resultBody = await readValidatedBody(event, PatchTasksSchema.safeParse);

  if (!resultId.success) {
    return sendError(
      event,
      createError({
        statusCode: 422,
        statusMessage: "Invalid id",
      })
    );
  }

  if (!resultBody) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "No updates found",
      })
    );
  }

  const task = await db.query.tasks.findFirst({
    where: eq(tasks.id, resultId.data.id),
  });

  if (task) {
    const updatedTask = await db
      .update(tasks)
      .set({ done: resultBody.data?.done })
      .where(eq(tasks.id, resultId.data.id))
      .returning();
    return updatedTask;
  }
});

import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const hanko = event.context.hanko;
  if (!hanko || !hanko.sub) {
    return {
      status: 401,
      body: {
        message: "Unauthorized",
      },
    };
  }

  const cookieId = event.context.hanko.sub;
  // Do something with the Hanko user
  //

  const res = await useDB()
    .select()
    .from(tables.users)
    .where(eq(cookieId, tables.users.userId))
    .all();

  if (!res) {
    return {
      status: 404,
      body: `User with id ${cookieId} not found`,
    };
  }

  return {
    status: 200,
    body: {
      res,
    },
  };
});

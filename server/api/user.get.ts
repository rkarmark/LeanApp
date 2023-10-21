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
  // Do something with the Hanko user
  //

  const res = useDB()
    .select()
    .from(tables.users)
    .where(eq(tables.users.userId, event.context.hanko.id))
    .get();

  if (res == undefined) {
    return {
      status: 404,
      body: {
        message: "User not found",
      },
    };
  }

  return {
    status: 200,
    body: {
      res,
    },
  };
});

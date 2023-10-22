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

  type NewUser = typeof tables.users.$inferInsert;

  const insertUser = async (user: NewUser) => {
    return useDB().insert(tables.users).values(user);
  };

  const newUser: NewUser = {
    userId: "e88a11ca-3ce2-4704-9317-7f2de3664023",
    userName: "Rolf Andersen",
    userImage: "https://i.pravatar.cc/150?u=e88a11ca-3ce2-4704-9317-7f2de3664023",
  };
  await insertUser(newUser);

  return {
    status: 200,
  };
});

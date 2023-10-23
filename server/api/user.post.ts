import { createInsertSchema } from 'drizzle-zod';



export default eventHandler(async (event) => {
  const insertUserSchema = createInsertSchema(tables.users)

  const {firstName, lastName, email, imageUrl} = await readValidatedBody(event, insertUserSchema.parse)

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



  const user = await useDB().insert(tables.users).values({
    userId: hanko.sub,
    firstName: firstName,
    lastName: lastName,
    email: email,
    imageUrl: imageUrl,
  }
  ).returning().get()


  return {
    user,
  };
});

import { object, string, number } from "yup";

const userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  optional1: string(),
  optional2: string(),
}).test({
  name: "is-one-available",
  message: "at least one is required",
  test: (value) => value.optional1 || value.optional2,
});

const fakeUser = {
  name: "First",
  age: 30,
  email: "fake@test.com",
  optional1: "something",
};

// userSchema.validate must be awaited
const isValid = await userSchema.validate(fakeUser);

console.debug("isValid?", isValid);

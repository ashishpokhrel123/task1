import request from "supertest";
import app from "../../app";

/* testing for register user */
describe("Post api/auth/register", () => {
  it("should return 201 and success message  when valid data is send over payload", async () => {
    const res = await request(app).post("auth/register").send({
      name: "Aashish Pokhrel",
      email: "testinguser1@gmail.com",
      password: "Test@123",
    });
  });

  expect(res.status).to.equal(201);
  expect(res.body).to.have.property("message", "User registered successfully");
});

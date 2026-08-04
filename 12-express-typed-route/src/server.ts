import express, {
  Request,
  Response
} from "express";

const app = express();

app.use(express.json());

type CreateUserBody = {
  name: string;
  email: string;
};

app.post(
  "/users",
  (
    req: Request<{}, {}, CreateUserBody>,
    res: Response
  ) => {

    const { name, email } = req.body;

    res.status(201).json({
      message: "User created",
      user: {
        name,
        email
      }
    });
  }
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
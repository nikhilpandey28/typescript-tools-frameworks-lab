import {
  greet,
  type User
} from "../../shared/dist/index.js";

const user: User = {
  id: 1,
  name: "Nikhil"
};

console.log(
  greet(user)
);
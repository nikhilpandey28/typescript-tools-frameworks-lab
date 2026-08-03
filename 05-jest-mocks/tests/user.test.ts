import * as userModule from "../src/user";

jest.mock("../src/user");

const mockedFetchUser =
  jest.mocked(userModule.fetchUser);

describe("fetchUser", () => {
  test("returns mocked user", async () => {

    mockedFetchUser.mockResolvedValue({
      id: 1,
      name: "Mock User"
    });

    const user =
      await mockedFetchUser(1);

    expect(user.name)
      .toBe("Mock User");
  });
});
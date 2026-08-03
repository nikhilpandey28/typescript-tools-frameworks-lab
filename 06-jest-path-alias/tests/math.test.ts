import { add }
from "@utils/math";

describe("add", () => {

  test("adds numbers", () => {

    expect(add(5, 5))
      .toBe(10);

  });

});
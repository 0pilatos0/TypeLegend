import { expect, describe, it, jest } from "bun:test";
import { retry } from "../../src/function/retry";

describe("retry", () => {
  it("should resolve with the result of the function if it succeeds on the first try", async () => {
    const fn = jest.fn().mockResolvedValue("success");
    const result = await retry(fn, 3);
    expect(result).toBe("success");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should resolve with the result of the function if it succeeds after multiple retries", async () => {
    const fn = jest.fn().mockRejectedValueOnce(new Error("error 1")).mockRejectedValueOnce(new Error("error 2")).mockResolvedValue("success");
    const result = await retry(fn, 3);
    expect(result).toBe("success");
    expect(fn).toHaveBeenCalledTimes(3);
  });
});

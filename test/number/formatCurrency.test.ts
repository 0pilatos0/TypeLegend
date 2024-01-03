import { expect, describe, it } from "bun:test";
import { formatCurrency } from "../../src/number/formatCurrency";

describe("formatCurrency", () => {
  it("should format positive number with default currency", () => {
    const num = 1234.56;
    const expectedOutput = "$1234.56";
    const result = formatCurrency(num);
    expect(result).toEqual(expectedOutput);
  });

  it("should format positive number with custom currency", () => {
    const num = 1234.56;
    const currency = "€";
    const expectedOutput = "€1234.56";
    const result = formatCurrency(num, currency);
    expect(result).toEqual(expectedOutput);
  });

  it("should format negative number with default currency", () => {
    const num = -1234.56;
    const expectedOutput = "$-1234.56";
    const result = formatCurrency(num);
    expect(result).toEqual(expectedOutput);
  });

  it("should format negative number with custom currency", () => {
    const num = -1234.56;
    const currency = "€";
    const expectedOutput = "€-1234.56";
    const result = formatCurrency(num, currency);
    expect(result).toEqual(expectedOutput);
  });

  it("should format zero with default currency", () => {
    const num = 0;
    const expectedOutput = "$0.00";
    const result = formatCurrency(num);
    expect(result).toEqual(expectedOutput);
  });

  it("should format zero with custom currency", () => {
    const num = 0;
    const currency = "€";
    const expectedOutput = "€0.00";
    const result = formatCurrency(num, currency);
    expect(result).toEqual(expectedOutput);
  });
});

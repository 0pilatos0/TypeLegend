
import { toRoman } from "./toRoman";
import { fromRoman } from "./fromRoman";
import { randomNumber } from "./randomNumber";
import { formatCurrency } from "./formatCurrency";

export class NumberUtils {
  static toRoman: typeof toRoman = toRoman;
  static fromRoman: typeof fromRoman = fromRoman;
  static randomNumber: typeof randomNumber = randomNumber;
  static formatCurrency: typeof formatCurrency = formatCurrency;
}

export { toRoman } from "./toRoman";
export { fromRoman } from "./fromRoman";
export { randomNumber } from "./randomNumber";
export { formatCurrency } from "./formatCurrency";


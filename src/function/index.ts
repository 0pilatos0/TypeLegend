
import { throttle } from "./throttle";
import { debounce } from "./debounce";
import { curry } from "./curry";
import { retry } from "./retry";
import { compose } from "./compose";
import { memoize } from "./memoize";

export class FunctionUtils {
  static throttle: typeof throttle = throttle;
  static debounce: typeof debounce = debounce;
  static curry: typeof curry = curry;
  static retry: typeof retry = retry;
  static compose: typeof compose = compose;
  static memoize: typeof memoize = memoize;
}

export { throttle } from "./throttle";
export { debounce } from "./debounce";
export { curry } from "./curry";
export { retry } from "./retry";
export { compose } from "./compose";
export { memoize } from "./memoize";


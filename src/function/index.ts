
import { compose } from "./compose";
import { curry } from "./curry";
import { debounce } from "./debounce";
import { memoize } from "./memoize";
import { retry } from "./retry";
import { throttle } from "./throttle";

export class FunctionUtils {
  static compose: typeof compose = compose;
  static curry: typeof curry = curry;
  static debounce: typeof debounce = debounce;
  static memoize: typeof memoize = memoize;
  static retry: typeof retry = retry;
  static throttle: typeof throttle = throttle;
}

export { compose } from "./compose";
export { curry } from "./curry";
export { debounce } from "./debounce";
export { memoize } from "./memoize";
export { retry } from "./retry";
export { throttle } from "./throttle";


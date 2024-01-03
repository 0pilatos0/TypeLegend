/**
 * Curries a function, allowing partial application of arguments.
 * @param fn - The function to curry.
 * @returns A curried function that can be called with partial arguments.
 */
export function curry<T extends any[]>(
  fn: (...args: T) => any
): (...args: Partial<T>) => any {
  return function currier(...args: Partial<T>): any {
    if (args.length >= fn.length) {
      return fn(...(args as T));
    } else {
      return function (...nextArgs: Partial<T>): any {
        return currier(...([...args, ...nextArgs] as unknown as Partial<T>));
      };
    }
  };
}

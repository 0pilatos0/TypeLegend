/**
 * Memoizes a function by caching its results based on the arguments.
 * @param fn The function to memoize.
 * @returns The memoized function.
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, any>();

  return function (...args: any[]): any {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  } as T;
}

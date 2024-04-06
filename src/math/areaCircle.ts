/**
 * Calculates the area of a circle.
 * @param radius - The radius of the circle.
 * @returns The area of the circle.
 */
export function areaCircle(radius: number): number {
  if (radius === 0) {
    return 0;
  }

  if (radius < 0) {
    return NaN;
  }
  return Math.PI * radius ** 2;
}

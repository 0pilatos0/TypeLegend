/**
 * Calculates the area of a rectangle.
 *
 * @param length - The length of the rectangle.
 * @param width - The width of the rectangle.
 * @returns The area of the rectangle.
 */
export function areaRectangle(length: number, width: number): number {
  if (length === 0 || width === 0) {
    return 0;
  }

  if (length < 0 || width < 0) {
    return NaN;
  }

  return length * width;
}

/**
 * Calculates the volume of a sphere given its radius.
 * @param radius The radius of the sphere.
 * @returns The volume of the sphere.
 */
export function volumeSphere(radius: number): number {
  return (4 / 3) * Math.PI * radius ** 3;
}

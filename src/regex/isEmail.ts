/**
 * Checks if a given string is a valid email address.
 * @param email - The email address to be validated.
 * @returns A boolean indicating whether the email is valid or not.
 */
export function isEmail(email: string): boolean {
  email = email.trim();

  if (email.length > 254) {
    return false;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}
